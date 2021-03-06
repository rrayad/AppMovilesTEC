/* eslint-disable */
import React, {Component} from 'react';
import {StyleSheet, Animated, View} from 'react-native';
import moment from 'moment';
import {FlatList} from 'react-native-gesture-handler';
import {
  Container,
  Header,
  Content,
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
  StatusBar
} from 'native-base';

import {SimpleClousure} from '../SimpleClousure'
export const MainRouter = SimpleClousure();

export default class Home extends Component {

  constructor(props) {
    super(props);

    global.allProducts = [];

    this.state = {
      loading: false,
      progressStatus: 50,
      allProducts: [],
    };

    MainRouter(props.navigation)

  }
  anim = new Animated.Value(0);
  componentDidMount() {
    this.onAnimate();
  }
  onAnimate = () => {
    this.anim.addListener(({value}) => {
      this.setState({progressStatus: parseInt(value, 10)});
    });

    Animated.timing(this.anim, {
      toValue: 100,
      duration: 1,
    }).start();

  };

  static navigationOptions = ({navigation}) => {
    const {params} = navigation.state;
    //quitar warnings
    console.disableYellowBox = true;
    return {
      swipeEnabled: true,
      gestureResponseDistance: {
        horizontal: -1,
        vertical: -1,
      },
      header: (
        <Header searchBar rounded>
          <Button transparent>
            <Icon name="menu" onPress={() => Home.openDrawer()} />
          </Button>

          <Item>
            <Input
              placeholder="Buscar..."
              onChangeText={text => params.funSearchText(text)}                            
            />
            <Icon Button name="people"/>
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
    //this.props.navigation.setParams({handleRemove: this._storeData});
    this.props.navigation.setParams({funSearchText: this.setSearchText});
    ////////////////////////////////////////////[ GET INFO FROM DB ]////////////////////////////////////////////////////
    fetch('https://0b0d37e6.ngrok.io/raffles/list', {
      method: 'get',
      /*headers: new Headers({
        Authorization:
          ' Bearer ' +
          'eyJhbGciOiJSUzI1NiIsImtpZCI6IjE3ZDU1ZmY0ZTEwOTkxZDZiMGVmZDM5MmI5MWEzM2U1NGMwZTIxOGIiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJhenAiOiIzMjU1NTk0MDU1OS5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsImF1ZCI6IjMyNTU1OTQwNTU5LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTAwMTk1MzYzNDg0NzAyMTIxNDcwIiwiZW1haWwiOiJyYXlhZGVsZ2Fkb3J1YmVuQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoidmpsM2tGRTBILUdhS3RhdWRVcnR6dyIsImlhdCI6MTU4MzExMTQ0MCwiZXhwIjoxNTgzMTE1MDQwfQ.Es7WXun8KQ2eyiW3eKylb7Ee2mz2kIuSy9E3wMYF_hPqAO76W7vwH_vah0lMJ0iUvEgWsvu_Q_9sCbiNRt_zONbjxwojij2L-HxhLDj-IDjolj0wEOdFD-7BVvw5oX7wL-jD06HFm-Hqd9ji2GcchqNeWzC5UPyF9G3q24wcc8GpsxxmfkT3sKG0tvUcBa6kPeENd5miCq7KnzPTo9-3TFV2QB0rLN-Fo411nmZNDt-r8Pa5vXEkwCoPpdZmOBDKKzbhVYBSEVxm5rt6jzcMUmW9GMCXpr0cM7fV35-mK7i1DFiDl8Dv2LNZoxNqQrhEGKEQMa51st99aBkowdWh2w',
        'Content-Type': 'application/json',
      }),
      */
    })
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          loading: false,
        });
        global.allProducts = responseJson;
        this.setState({allProducts: responseJson});
      })
      .catch(() => console.log('no hay conexion')); //to catch the errors if any
    ////////////////////////////////////////////////////////////////////////////////////////////////
  }

  setSearchText = event => {
    
    const par = {"filter" : {"title":"Lupa"}};
    axios.get('http://0.0.0.0:8080/raffles/list', par)
    .then(data => 
      console.log(data.data[0].title)      
      )
}

  render() {
    //const {navigation} = this.props;

    return (
      <Container>
        {/* FILTROS DE BUSQUEDA */}
        <Header style={{top: -40, height: 140, backgroundColor: '#00147E'}}>
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
                          uri: item.image,
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

        {/* LISTA PRINCIPAL */}
        <Content style={{top: -30}}>
          <FlatList
            data={global.allProducts}
            renderItem={({item}) => (
              <Content>
                <Card>
                  <CardItem
                    header
                    button
                    onPress={() =>
                      this.props.navigation.push('Details', {
                        title: item.title,
                        likes: item.likes,
                        unlikes: item.unlikes,
                        comments: item.comments,
                        pictures: item.pictures,
                        description: item.description,
                        expired: item.expired,
                        ticketcost: item.ticketcost,
                        sold: item.sold,
                        tickets: item.tickets,
                      })
                    }>
                    <Left>
                      <Thumbnail square source={{uri: item.pictures[0]}} />
                      <Body>
                        <Text>{item.title}</Text>
                        <Text note>
                          Fecha de vencimiento:{' '}
                          {moment(item.expired).format(
                            'MMMM Do YYYY, h:mm:ss a',
                          )}
                        </Text>
                        <Text note>Costo del Boleto: ${item.ticketcost}</Text>
                        <Text note>
                          {item.sold}/{item.tickets} boletos
                        </Text>
                        <View style={styles.container}>
                          <Animated.View
                            style={[
                              styles.inner,
                              {width: this.state.progressStatus + '%'},
                            ]}
                          />
                          {/*<Animated.Text style={styles.label}>
                            {this.state.progressStatus}%
                          </Animated.Text>*/}
                        </View>
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

const filters = [
  {
    type: 'Mejores Vendidos',
    image:
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
    description: 'description',
  },
];

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 0,
    borderColor: '#B2B8D8',
    borderWidth: 3,
    borderRadius: 30,
    marginTop: 10,
    justifyContent: 'center',
  },
  inner: {
    width: '100%',
    height: 10,
    borderRadius: 15,
    backgroundColor: '#0028F7',
  },
  label: {
    fontSize: 23,
    color: 'black',
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
  },
});
