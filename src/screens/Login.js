import React, {Component} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Animated,
  Keyboard,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import {Icon, Button} from 'native-base';
import styles, {IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL} from './styles';
import logo from '../images/login/logo.png';
import {LoginButton, AccessToken} from 'react-native-fbsdk';

export default class Demo extends Component {
  constructor(props) {
    super(props);
    this.keyboardHeight = new Animated.Value(0);
    this.imageHeight = new Animated.Value(IMAGE_HEIGHT);
  }
  state = {
    userName: '',
    password: '',
    userPicture: 'https://i.picsum.photos/id/133/400/400.jpg',
    userEmail: '',
  };

  _storeData = async json => {
    console.log(json);
    try {
      await AsyncStorage.setItem('userName', json.name);
      await AsyncStorage.setItem('userPicture', json.picture.data.url);
      await AsyncStorage.setItem('userEmail', json.email);
    } catch (error) {
      // Error saving data
    }
  };

  initUser(token) {
    console.log(token);
    fetch(
      'https://graph.facebook.com/v6.0/me?fields=id,name,email,about,address,birthday,gender,link,location,picture&access_token=' +
        token,
    )
      .then(response => response.json())
      .then(json => {
        this._storeData(json);
        this.props.navigation.push('Home');
      })
      .catch(() => {
        reject('ERROR GETTING DATA FROM FACEBOOK');
      });
  }

  static navigationOptions = {header: null};

  componentDidMount() {
    console.disableYellowBox = true;
    this.keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      this.keyboardWillShow,
    );
    this.keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
      this.keyboardWillHide,
    );
  }

  componentWillUnmount() {
    this.keyboardWillShowSub.remove();
    this.keyboardWillHideSub.remove();
  }

  keyboardWillShow = event => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: event.endCoordinates.height,
      }),
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: IMAGE_HEIGHT_SMALL,
      }),
    ]).start();
  };

  keyboardWillHide = event => {
    Animated.parallel([
      Animated.timing(this.keyboardHeight, {
        duration: event.duration,
        toValue: 0,
      }),
      Animated.timing(this.imageHeight, {
        duration: event.duration,
        toValue: IMAGE_HEIGHT,
      }),
    ]).start();
  };

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Animated.View
          style={[styles.container, {paddingBottom: this.keyboardHeight}]}>
          <Animated.Image
            source={logo}
            style={[styles.logo, {height: this.imageHeight}]}
          />
          <View style={styles.container}>
            <Text style={styles.welcome}>INICIAR SESIÓN</Text>

            <View style={styles.emailContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Usuario"
                placeholderTextColor="#7962B9"
                keyboardType="email-address"
                onChangeText={value => this.setState({username: value})}
                value={this.state.username}
              />
            </View>
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.textInput}
                placeholder="Contraseña"
                placeholderTextColor="#7962B9"
                secureTextEntry={true}
                onChangeText={value => this.setState({password: value})}
                value={this.state.password}
              />
            </View>

            <TouchableOpacity>
              <View style={styles.forgotPassword}>
                <Text style={styles.forgotText}>OLVIDÉ MI CONTRASEÑA</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.button}>
                <Text
                  button
                  onPress={() =>
                    this.props.navigation.push('Home', {
                      userName: this.state.userName,
                      userPicture: this.state.userPicture,
                      userEmail: this.state.userEmail,
                    })
                  }
                  style={styles.buttonText}>
                  INICIAR SESIÓN
                </Text>
              </View>
            </TouchableOpacity>
            <Text style={styles.iniciaCon}>Inicia sesión con:</Text>
            <LoginButton
              onLoginFinished={(error, result) => {
                if (error) {
                  console.log('login has error: ' + result.error);
                } else if (result.isCancelled) {
                  console.log('login is cancelled.');
                } else {
                  AccessToken.getCurrentAccessToken().then(data => {
                    this.initUser(data.accessToken);
                  });
                }
              }}
              onLogoutFinished={() => console.log('logout.')}
            />
          </View>
        </Animated.View>
        <TouchableOpacity>
          <View style={styles.createAccount}>
            <Text style={styles.createText}>Crear una núeva</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}
