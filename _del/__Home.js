/* eslint-disable */
import React, {Component} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Modal, TouchableHighlight} from 'react-native';
import {
  Container,
  Header,
  Content,
  View,
  Item,
  Input,
  Icon,
  Text,
  Button,
  Left,
  Body,
  Card,
  CardItem,
  Thumbnail,
  Fab,
  Form,
} from 'native-base';

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchText: '',
      dataGlobal: [],
      dataBackup: [],
      getData: [],
    };
  }

  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;

    return {
      header: (
        <Header searchBar rounded>
          <Item>
            <Input
              placeholder="Buscar..."
              onChangeText={text => params.funSearchText(text)}
            />
            <Icon Button name="people" onPress={() => Home.openDrawer()} />
          </Item>
        </Header>
      ),
    };
  };

  componentDidMount() {
    this.props.navigation.setParams({funSearchText: this.setSearchText});
  }

  setSearchText = event => {
    this.setState({
      searchText: event,
    });
  };

  _storeData = async () => {
    try {
      let se = this.state.searchText;
      names.push({name: se});

      fetch(
        'https://westus.api.cognitive.microsoft.com/luis/v2.0/apps/276fb926-2782-4260-9fee-c61751a0acca?verbose=true&timezoneOffset=0&subscription-key=07abd66c9d5147b2bbb52403d3ddc9e7&q=' +
          se,
        {
          method: 'get',
          headers: new Headers({
            'Content-Type': 'application/json',
          }),
        },
      )
        .then(response => response.json())
        .then(responseJson => {
          let resp = responseJson.intents[0].intent;

          if (resp) {
            if (resp == 'saludos') {
              names.push({name: 'Hola en que te puedo ayudar'});
            }
            if (resp == 'tacos') {
              names.push({name: 'Tengo el menu del dia'});
            }
          }
          this.setState({
            dataGlobal: names,
          });
        })
        .catch(error => console.log('no hay conexion'));
    } catch (error) {
      alert('Error');
    }
  };

  render() {
    return (
      <Container>
        <Content>
          <Button
            Button
            onPress={() => {
              this._storeData();
            }}>
            <Text>boton</Text>
          </Button>
          <FlatList
            data={this.state.dataGlobal}
            renderItem={({item}) => (
              <Content>
                <Card>
                  <CardItem header>
                    <Left>
                      <Body>
                        <Text>{item.name}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                </Card>
              </Content>
            )}
          />
        </Content>
      </Container>
    );
  }
}