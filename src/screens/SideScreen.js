/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';

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
  Icon,
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
      userName: '',
      userEmail: '',
      userPicture: '',
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
                      uri: global.userPicture,
                    }}
                  />
                </Left>
                <Body>
                  <Text style={styles.textName}>{this.state.userName}</Text>
                  <Text note style={styles.textEmail}>
                    {' '}
                    {global.userEmail}{' '}
                  </Text>
                </Body>
              </ListItem>
            </List>
          </Content>
        </Header>
        <Left>
          <Button
            iconLeft
            small
            light
            style={styles.button}
            onPress={this.closeDrawer(() => MainRouter().navigate('Home'))}>
            <Icon name="home" />
            <Text>Inicio</Text>
          </Button>
          <Button
            badge
            iconLeft
            small
            light
            style={styles.button}
            onPress={this.closeDrawer(() =>
              MainRouter().navigate('Announcement'),
            )}>
            <Icon name="home" />
            <Text>Rifas compradas</Text>
            <Badge style={styles.badge}>
              <Text style={styles.badgeText}>13</Text>
            </Badge>
          </Button>
          <Button iconLeft small light style={styles.button}>
            <Icon name="home" />
            <Text>Mis Rifas</Text>
          </Button>
          <Button iconLeft small light style={styles.button}>
            <Icon name="home" />
            <Text>Envios</Text>
          </Button>
          <Button iconLeft small light style={styles.button}>
            <Icon name="cuestion" />
            <Text>Preguntas de mis anuncions</Text>
            <Badge style={styles.badge}>
              <Text style={styles.badgeText}>7</Text>
            </Badge>
          </Button>
          <Button iconLeft small light style={styles.button}>
            <Icon name="home" />
            <Text>Métodos de pago</Text>
          </Button>
          <Button iconLeft small light style={styles.button}>
            <Icon name="card" />
            <Text>Métodos de cobro</Text>
          </Button>
          <Button iconLeft small light style={styles.button}>
            <Icon name="oencil" />
            <Text>Editar perfil</Text>
          </Button>
          <Button iconLeft small light style={styles.button}>
            <Icon name="camera" />
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
