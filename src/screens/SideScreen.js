/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Card,
  CardItem,
  Left,
  Right,
  Thumbnail,
  Image,
  Icon,
  Content,
  Button,
  Item,
  Input,
  Text,
  Body,
  Footer,
} from 'native-base';

import {MainRouter} from '../screens/Home';

export default class SideScreen extends Component {
  constructor(props) {
    super(props);
  }

  closeDrawer = callBack => {
    return () => {
      SideScreen.closeDrawer();
      callBack();
    };
  };

  render() {
    return (
      <Container>
        <Header style={{top: -30, height: 180, backgroundColor: '#0028F7'}}>
          <Content>
            <Card style={{backgroundColor: '#0028F7', borderColor: '#0028F7'}}>
              <CardItem
                style={{backgroundColor: '#0028F7', borderColor: '#0028F7'}}>
                <Body
                  style={{backgroundColor: '#0028F7', borderColor: '#0028F7'}}>
                  <CardItem
                    style={{
                      backgroundColor: '#0028F7',
                      borderColor: '#0028F7',
                    }}>
                    <Left>
                      <Text style={{color: 'white', fontSize: 20}}>
                        Ruben Raya D.
                      </Text>
                    </Left>
                    <Right>
                      <Thumbnail
                        large
                        source={{
                          uri: 'https://i.picsum.photos/id/133/400/400.jpg',
                        }}
                      />
                    </Right>
                  </CardItem>
                  <Left>
                    <Text
                      style={{
                        color: 'white',
                        fontSize: 20,
                        alignContent: 'flex-start',
                      }}
                      note>
                      **** **** **** *913
                    </Text>
                  </Left>
                </Body>
              </CardItem>
            </Card>
          </Content>
        </Header>
        <Left>
          <Button iconLeft transparent>
            <Icon name="home" />
            <Text>Home</Text>
          </Button>
          <Button
            iconLeft
            transparent
            onPress={this.closeDrawer(() =>
              MainRouter().navigate('Announcement'),
            )}>
            <Icon name="home" />
            <Text>Mis anuncios</Text>
          </Button>
          <Button iconLeft transparent>
            <Icon name="home" />
            <Text>Boletos Comprados</Text>
          </Button>
          <Button iconLeft transparent>
            <Icon name="home" />
            <Text>Editar perfil</Text>
          </Button>
          <Button iconLeft transparent>
            <Icon name="home" />
            <Text>Métodos de pago</Text>
          </Button>
          <Button iconLeft transparent>
            <Icon name="home" />
            <Text>Métodos de cobro</Text>
          </Button>
          <Button iconLeft transparent>
            <Icon name="home" />
            <Text>Tutoriales</Text>
          </Button>
        </Left>
        <Footer>
          <Text style={{top: 20, color: 'red'}}>Cerrar sesión</Text>
        </Footer>
      </Container>
    );
  }
}
