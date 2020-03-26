import React, {Component} from 'react';
import styles, {IMAGE_HEIGHT, IMAGE_HEIGHT_SMALL} from './styles';
import {Buttons} from '../design/buttons';
import {AsyncStorage} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
} from 'native-base';


export default class CardHeaderFooterExample extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      password: '',
    };
  }

  _storeDataLastName = async () => {
    try {
      await AsyncStorage.setItem('password', 'password');
      this.props.navigation.push('Info');
    } catch (error) {
      // Error saving data
    }
  };

  // fetch the data back asyncronously
  _retrieveData = async () => {
    try {
      const userNameValue = await AsyncStorage.getItem('userName');
      const passwordValue = await AsyncStorage.getItem('password');

      if (userNameValue !== null) {
        // Our data is fetched successfully
        this.setState({
          userName: userNameValue,
          password: passwordValue,
        });
      }
    } catch (error) {
      // Error retrieving data
    }
  };

  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card>
            <CardItem header>
              <Text>{this.state.userName + this.state.password}</Text>
            </CardItem>
            <CardItem>
              <Body>
                <Text button onPress={() => this._retrieveData()}>
                  Que tengo ?
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Buttons colorMain>
                <Text button onPress={() => this._storeDataLastName()}>
                  save Lastname & continue
                </Text>
              </Buttons>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
