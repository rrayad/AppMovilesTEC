/* eslint-disable */
import React, {Component} from 'react';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
} from 'react-native';
import {
  Container,
  Content,
  Button,
  Thumbnail,
  Text,
  Icon,
  FooterTab,
  Footer,
  Card,
  Image
} from 'native-base';

export default class Details extends Component {
  constructor(props) {
    super(props);    
    const { navigation } = props;
    global.navigation = navigation,
    global.pictures = global.navigation.getParam("pictures")
    console.log(global.pictures);
    this.state = {
      loading: false,
      dataSource: [],
    };
  }

  static navigationOptions = ({navigation}) => {    
    return {
      /*
      headerTitle: (
        <Thumbnail style={{marginTop:190, height: 200, width: 200, flex: 1}}  square large source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }} />
      ),
      */
      title: JSON.stringify(navigation.getParam('title')),
      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#626262',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  FlatListItemSeparator = () => {
    return (
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: 'rgba(0,0,0,0.5)',
        }}
      />
    );
  };
  renderItem = data => (
    <TouchableOpacity>
      <Text style={styles.lightText}>{global.navigation.getParam("description")}</Text>
      <Text> aqui</Text>
    </TouchableOpacity>
  );

  render() {
    
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    }

    return (
      <Container style={{alignItems: 'center', backgroundColor: '#F1F1F1'}}>
        <Content>
          <Card
            transparent
            style={{alignItems: 'center', backgroundColor: '#F1F1F1'}}>
            <Text>{global.navigation.getParam("title")}</Text>
          </Card>
          <Thumbnail
            square
            source={{uri: global.navigation.getParam("pictures")}}
            style={{margin: 10, alignItems: 'center', height: 200, width: 300}}
          />
          <Card transparent style={{paddingLeft: 10}}>
            <Text style={{fontSize: 12}}>{global.navigation.getParam("description")}</Text>
          </Card>

          <View>
          <Image source={{uri: global.pictures[0]}} style={{height: 200, width: null, flex: 1}}/>
          </View>
        </Content>
        <Footer>
          <FooterTab>
            <Button transparent>
              <Icon name="thumbs-up" />
              <Text>12</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button transparent>
              <Icon name="chatbubbles" />
              <Text>12</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button transparent>
              <Icon2 name="facebook-f" />
            </Button>
          </FooterTab>
          <FooterTab>
            <Button transparent>
              <Icon2 name="twitter" />
            </Button>
          </FooterTab>
          <FooterTab>
            <Button transparent>
              <Icon2 name="instagram" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  list: {
    paddingVertical: 4,
    margin: 5,
    backgroundColor: '#fff',
  },
});
