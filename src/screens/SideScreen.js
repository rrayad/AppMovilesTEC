/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';

import {StyleSheet, Dimensions, AsyncStorage} from 'react-native';
const window = Dimensions.get('window');
export const IMAGE_HEIGHT = window.height / 6;

import {
  Container,
  Header,
  List,
  ListItem,
  Left,
  Thumbnail,
  Content,
  Button,
  Text,
  Body,
  Footer,
  Badge,
} from 'native-base';

import {MainRouter} from '../screens/Home';

export default class SideScreen extends Component {
  constructor(props) {
    super(props);
    global.userName = '';
    global.userEmail = '';
    global.userPicture = '';
    this.state = {
      userName: 'Rubén Raya',
      userEmail: 'traggame@hotmail.com',
      userPicture:
        'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2444798238877374&height=50&width=50&ext=1589937161&hash=AeQTWxpKQAtP31Wo',
    };
  }

  _retrieveData = async () => {
    try {
      this.setState = {userName: await AsyncStorage.getItem('userName')};
    } catch (error) {
      // Error retrieving data
    }
  };

  closeDrawer = callBack => {
    return () => {
      SideScreen.closeDrawer();
      callBack();
    };
  };

  componentDidMount() {
    this._retrieveData();
  }

  render() {
    return (
      <Container style={styles.footer}>
        <Header style={styles.header}>
          <Content>
            <List>
              <ListItem thumbnail>
                <Left>
                  <Thumbnail
                    source={{
                      uri: this.state.userPicture,
                    }}
                    style={styles.profilePicture}
                  />
                </Left>
                <Body>
                  <Text style={styles.textName}>{this.state.userName}</Text>
                  <Text note style={styles.textEmail}>
                    {' '}
                    {this.state.userEmail}{' '}
                  </Text>
                </Body>
              </ListItem>
            </List>
          </Content>
        </Header>
        <Left>
          <Button
            small
            light
            style={styles.button}
            onPress={this.closeDrawer(() => MainRouter().navigate('Home'))}>
            <Icon name="home" size={20} backgroundColor="#fff" color="black" />
            <Text>Inicio</Text>
          </Button>
          <Button
            small
            light
            style={styles.button}
            onPress={this.closeDrawer(() =>
              MainRouter().navigate('Announcement'),
            )}>
            <Icon
              name="shopping-basket"
              size={18}
              backgroundColor="#fff"
              color="black"
            />
            <Text>Rifas compradas</Text>
            <Badge style={styles.badge}>
              <Text style={styles.badgeText}>13</Text>
            </Badge>
          </Button>
          <Button iconLeft small light style={styles.button}>
            <Icon
              name="ticket-alt"
              size={20}
              backgroundColor="#fff"
              color="black"
            />
            <Text>Mis Rifas</Text>
          </Button>
          <Button iconLeft small light style={styles.button}>
            <Icon name="truck" size={20} backgroundColor="#fff" color="black" />
            <Text>Envios</Text>
          </Button>
          <Button iconLeft small light style={styles.button}>
            <Icon
              name="question"
              size={20}
              backgroundColor="#fff"
              color="black"
            />
            <Text>Preguntas de mis anuncions</Text>
            <Badge style={styles.badge}>
              <Text style={styles.badgeText}>7</Text>
            </Badge>
          </Button>
          <Button iconLeft small light style={styles.button}>
            <Icon
              name="credit-card"
              size={20}
              backgroundColor="#fff"
              color="black"
            />
            <Text>Métodos de pago</Text>
          </Button>
          <Button iconLeft small light style={styles.button}>
            <Icon
              name="cash-register"
              size={20}
              backgroundColor="#fff"
              color="black"
            />

            <Text>Métodos de cobro</Text>
          </Button>
          <Button iconLeft small light style={styles.button}>
            <Icon
              name="pencil-alt"
              size={20}
              backgroundColor="#fff"
              color="black"
            />

            <Text>Editar perfil</Text>
          </Button>
          <Button iconLeft small light style={styles.button}>
            <Icon name="video" size={20} backgroundColor="#fff" color="black" />
            <Text>Tutoriales</Text>
          </Button>
        </Left>
        <Footer style={styles.footer}>
          <Text style={styles.textCerrarSesion}>Cerrar sesión</Text>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  profilePicture: {
    shadowColor: '#BBBBBB',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 0.8,
  },
  header: {
    height: IMAGE_HEIGHT,
    backgroundColor: '#4EEACF',
  },
  body: {
    backgroundColor: '#F6F5FB',
  },
  footer: {backgroundColor: '#F6F5FB'},
  textName: {
    color: '#000000',
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#FFFFFF',
    marginTop: 13,
    shadowColor: '#D7D6DC',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 0.8,
  },
  textEmail: {
    color: '#000000',
    fontWeight: 'bold',
  },
  textCerrarSesion: {
    top: 15,
    color: 'red',
  },
  badge: {
    top: -25,
    right: -10,
  },
  badgeText: {
    fontWeight: 'bold',
  },
});
