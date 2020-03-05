/* eslint-disable */
import React, {Component} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {Modal,TouchableHighlight} from 'react-native';
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
  Form
} from 'native-base';

const imagenDemo = 'https://pngimg.com/uploads/macbook/macbook_PNG58.png';

export default class Home extends Component {
  constructor(props) {
    super(props);

    global.getData = [];
    global.counter = 0;

    this.state = {
      loading: false,

      add1: false,
      add2: false,      
      add3: false,      

      getData: [],
    };
  }

  static navigationOptions = () => {
    return {
      swipeEnabled: false,
      gestureResponseDistance: {
        horizontal: -1,
        vertical: -1,
      },
      header: (
        <Header searchBar rounded>
          <Button transparent>
            <Icon name="menu" />
          </Button>

          <Item>
            <Input placeholder="Buscar..." />
            <Icon name="people" />
          </Item>

          <Button transparent>
            <Icon name="funnel"></Icon>
          </Button>
        </Header>
      ),

      headerStyle: {
        backgroundColor: '#fff',
      },
      headerTintColor: '#626262',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
  };

  componentDidMount() {
    //this.props.navigation.setParams({handleRemove: this.removeVehicle});
    ////////////////////////////////////////////[ GET INFO FROM DB ]////////////////////////////////////////////////////
    fetch('https://rifas.yobiss.com/raffles/list', {
      method: 'get',
      headers: new Headers({
        Authorization:
          ' Bearer ' +
          'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3ZDU1ZmY0ZTEwOTkxZDZiMGVmZDM5MmI5MWEzM2U1NGMwZTIxOGIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAwMTk1MzYzNDg0NzAyMTIxNDcwIiwiZW1haWwiOiJyYXlhZGVsZ2Fkb3J1YmVuQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoidmpsM2tGRTBILUdhS3RhdWRVcnR6dyIsImlhdCI6MTU4MzExMTQ0MCwiZXhwIjoxNTgzMTE1MDQwfQ.Es7WXun8KQ2eyiW3eKylb7Ee2mz2kIuSy9E3wMYF_hPqAO76W7vwH_vah0lMJ0iUvEgWsvu_Q_9sCbiNRt_zONbjxwojij2L-HxhLDj-IDjolj0wEOdFD-7BVvw5oX7wL-jD06HFm-Hqd9ji2GcchqNeWzC5UPyF9G3q24wcc8GpsxxmfkT3sKG0tvUcBa6kPeENd5miCq7KnzPTo9-3TFV2QB0rLN-Fo411nmZNDt-r8Pa5vXEkwCoPpdZmOBDKKzbhVYBSEVxm5rt6jzcMUmW9GMCXpr0cM7fV35-mK7i1DFiDl8Dv2LNZoxNqQrhEGKEQMa51st99aBkowdWh2w',
        'Content-Type': 'application/json',
      }),
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
        });
        global.getData = responseJson;
        this.setState({getData: responseJson});
      })
      .catch(error => console.log("no hay conexion")); //to catch the errors if any
    ////////////////////////////////////////////////////////////////////////////////////////////////
  }

  openMenu = () => {      
    console.log(this.state.add2)  
    this.setState({add2: !this.state.add2});
  };
  openMenu2 = () => {    
    this.setState({add2: !this.state.add2});
    this.setState({add3: !this.state.add3});
  };

  
  render() {
    return (
      <Container>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.add1}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          
          <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Item>
            <TouchableHighlight
                onPress={() => {
                  this.setState({add1: false});
                  this.setState({add2: true});                
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </Item>
          </Form>
        </Content>
        </Modal> 

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.add2}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          
          <Content>
          <Form>
            <Item>
              <Input placeholder="Username2" />
            </Item>
            <Item last>
              <Input placeholder="Password2" />
            </Item>
            <Item>
            <TouchableHighlight
                onPress={() => {
                  this.setState({add2: false});
                  this.setState({add3: true});
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </Item>
          </Form>
        </Content>
        </Modal> 

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.add3}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          
          <Content>
          <Form>
            <Item>
              <Input placeholder="Username3" />
            </Item>
            <Item last>
              <Input placeholder="Password4" />
            </Item>
            <Item>
            <TouchableHighlight
                onPress={() => {                  
                  this.setState({add3: false});
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </Item>
          </Form>
        </Content>
        </Modal> 

        <Header style={{top: -40, height: 140}}>
          <FlatList
            horizontal={true}
            data={filters}
            renderItem={({item}) => (
              <View>
                <Card>
                  <CardItem>
                    <Body style={{alignItems: 'center'}}>
                      <Thumbnail
                        source={{
                          uri:
                            'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
                        }}
                      />
                      <Text>{item.type}</Text>
                      <Text note>GeekyAnts</Text>
                    </Body>
                  </CardItem>
                </Card>
              </View>
            )}
          />
        </Header>
        <Content style={{top: -30}}>
          <FlatList
            data={products}
            renderItem={({item}) => (
              <Content>
                <Card>
                  <CardItem
                    header
                    button
                    onPress={() =>
                      this.props.navigation.push('Details', {
                        title: item.title,
                        likes:item.likes,
                        unlikes: item.unlikes,
                        comments: item.comments,
                        pictures: item.pictures,
                        description: item.description,
                      })
                    }>
                    <Left>
                      <Thumbnail source={{uri: item.pictures[0]}} />
                      <Body>
                        <Text>{item.title}</Text>
                        <Text note>{item.description}</Text>
                      </Body>
                    </Left>
                  </CardItem>
                </Card>
              </Content>
            )}
          />
        </Content>
        <Fab
          active={this.state.active}
          direction="up"
          containerStyle={{}}
          style={{backgroundColor: '#1786FF'}}
          position="bottomRight"
          onPress={() => this.setState({active: !this.state.active})}>
          <Icon large name="logo-buffer" />

          <Button
            onPress={() => {
              this.setState({add1: true});
            }}
            style={{backgroundColor: '#34A34F'}}>
            <Icon name="stats" />
          </Button>

          <Button style={{backgroundColor: '#DD5144'}}>
            <Icon name="cash" />
          </Button>

          <Button large style={{backgroundColor: '#3B5998'}}>
            <Icon name="add" style={{fontSize: 30}} />
          </Button>
        </Fab>
       
      </Container>
    );
  }
}

const filters = [
  {
    type: 'Mejores Vendidos',
    image:
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
    description: 'description',
  },
  {
    type: 'Oportunidades',
    image:
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
    description: 'description',
  },
  {
    type: 'Ofertas',
    image:
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
    description: 'description',
  },
  {
    type: 'Promos',
    image:
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
    description: 'description',
  },
  {
    type: 'Best Sellers',
    image:
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
    description: 'description',
  },
  {
    type: 'Oportunidades',
    image:
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
    description: 'description',
  },
];
const products = [
  {
    _id: '5e5442d7c62ef1fb64728200',
    title: 'MacBook Pro',
    description: 'Laptop MacBook Pro 2014 16 GB RAM Core i7',
    category: 'computers',
    expired: '2020-03-31T15:15:00Z',
    tickets: '100',
    ticketcost: '1000',
    seller: '5e5440d6c62ef1fb1892ee5c',
    pictures: [
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
    ],
    created: '2020-02-24T15:15:00Z',
    updated: 'Mon, 24 Feb 2020 16:24:32 GMT',
    updatedby: 'admin@rifas.com',
    tags: [
      {
        '': '',
      },
      {
        '': '',
      },
    ],
    isActive: 'false',
    likes: 0,
    unlikes: 0,
    comments: 1,
  },
  {
    _id: '5e5442d7c62ef1fb64728200',
    title: 'Cocina',
    description: 'Laptop MacBook Pro 2014 16 GB RAM Core i7',
    category: 'computers',
    expired: '2020-03-31T15:15:00Z',
    tickets: '100',
    ticketcost: '1000',
    seller: '5e5440d6c62ef1fb1892ee5c',
    pictures: [
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
    ],
    created: '2020-02-24T15:15:00Z',
    updated: 'Mon, 24 Feb 2020 16:24:32 GMT',
    updatedby: 'admin@rifas.com',
    tags: [
      {
        '': '',
      },
      {
        '': '',
      },
    ],
    isActive: 'false',
    likes: 0,
    unlikes: 0,
    comments: 1,
  },
  {
    _id: '5e5442d7c62ef1fb64728200',
    title: 'Lampara',
    description: 'Laptop MacBook Pro 2014 16 GB RAM Core i7',
    category: 'computers',
    expired: '2020-03-31T15:15:00Z',
    tickets: '100',
    ticketcost: '1000',
    seller: '5e5440d6c62ef1fb1892ee5c',
    pictures: [
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
    ],
    created: '2020-02-24T15:15:00Z',
    updated: 'Mon, 24 Feb 2020 16:24:32 GMT',
    updatedby: 'admin@rifas.com',
    tags: [
      {
        '': '',
      },
      {
        '': '',
      },
    ],
    isActive: 'false',
    likes: 0,
    unlikes: 0,
    comments: 1,
  },
];