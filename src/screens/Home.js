/* eslint-disable */
import React, {Component} from 'react';
import {StyleSheet, Animated, Dimensions} from 'react-native';
import moment from 'moment';
import {FlatList} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  Container,
  Header,
  Content,
  Item,
  Input,
  Text,
  Button,
  Left,
  Body,
  Card,
  Icon as Icon2,
  CardItem,
  Thumbnail,
} from 'native-base';
const window = Dimensions.get('window');
export const IMAGE_HEIGHT = window.height / 5;
export const IMAGE_WIDTH = window.width / 1.5;

import {SliderBox} from 'react-native-image-slider-box';

import {SimpleClousure} from '../SimpleClousure';
export const MainRouter = SimpleClousure();

export default class Home extends Component {
  constructor(props) {
    super(props);

    global.allProducts = [];

    this.state = {
      loading: false,
      progressStatus: 50,
      allProducts: [],
      images: [
        'https://keilahradio.com/wp-content/uploads/2018/11/104325883_gettyimages-966879354.jpg',
        'https://www.lalolaapp.com/wp-content/uploads/2018/10/ofertas-01.png',
        'https://www.muycomputer.com/wp-content/uploads/2018/07/Rebajas-Verano-PlayStation-Store-e1532535132599.png',
        'https://www.golfelchaparral.com/wp-content/uploads/2016/06/oferta-verano-2016-el-chaparral-golf-club-costa-del-sol.jpg', // Network image
        require('../images/login/firstImageCarrousel.png'), // Local image
      ],
    };

    MainRouter(props.navigation);
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

  // static navigationOptions = ({navigation}) => {
  //   const {params} = navigation.state;
  //   //quitar warnings
  //   console.disableYellowBox = true;
  //   return {
  //     swipeEnabled: true,
  //     gestureResponseDistance: {
  //       horizontal: -1,
  //       vertical: -1,
  //     },
  //     header: (
  //       <Header searchBar rounded>
  //         <Button transparent>
  //           <Icon name="menu" onPress={() => Home.openDrawer()} />
  //         </Button>

  //         <Item>
  //           <Input
  //             placeholder="Buscar..."
  //             onChangeText={text => params.funSearchText(text)}
  //           />
  //           <Icon Button name="people"/>
  //         </Item>

  //         <Button transparent>
  //           <Icon name="funnel"></Icon>
  //         </Button>
  //       </Header>
  //     ),

  //     headerStyle: {
  //       backgroundColor: '#fff',
  //     },
  //     headerTintColor: '#626262',
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //     },
  //   };
  // };

  componentDidMount() {
    console.disableYellowBox = true;
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
    const par = {filter: {title: 'Lupa'}};
    axios
      .get('http://0.0.0.0:8080/raffles/list', par)
      .then(data => console.log(data.data[0].title));
  };
  static navigationOptions = {header: null};

  render() {
    //const {navigation} = this.props;
    return (
      <Container style={styles.container}>
        {/* FILTROS DE BUSQUEDA */}
        <Header style={styles.header} searchBar rounded>
          <Button transparent light>
          <Icon name="bars" onPress={() => Home.openDrawer()}   size={25} color="white" />            
          </Button>
          <Item>
            <Input placeholder="Buscar..." />
            <Icon2 name="search" />
          </Item>
          <Button transparent light>
          <Icon name="filter" onPress={() => Home.closeDrawer}  size={20} color="white" />            
          </Button>
        </Header>
        {/* LISTA PRINCIPAL */}
        <SliderBox
          sliderBoxHeight={IMAGE_HEIGHT}
          images={this.state.images}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          autoplay
          circleLoop
          resizeMethod={'resize'}
          resizeMode={'cover'}
          paginationBoxStyle={{
            position: 'absolute',
            bottom: 0,
            padding: 0,
            alignItems: 'center',
            alignSelf: 'center',
            justifyContent: 'center',
            paddingVertical: 10,
          }}
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: 'rgba(246, 245, 251, 0.92)',
          }}
          ImageComponentStyle={{borderRadius: 15, width: '97%', marginTop: 5}}
          imageLoadingColor="#2196F3"
        />
        <FlatList
          data={raffles}
          renderItem={({item}) => (
            <Content>
              <Card style={styles.card}>
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
                    <Thumbnail square source={{uri: item.picture}} />
                    <Body>
                      <Text>{item.title}</Text>
                      <Text note>
                        Vence:{' '}
                        {moment(item.expired).format('MMMM Do YYYY, h:mm:ss a')}
                      </Text>
                      <Text note>${item.ticketcost}</Text>
                      <Text note>
                        {item.sold}/{item.tickets} boletos
                      </Text>
                      {/*<View style={styles.container}>
                        <Animated.View
                          style={[
                            styles.inner,
                            {width: this.state.progressStatus + '%'},
                          ]}
                        />
                        <Animated.Text style={styles.label}>
                            {this.state.progressStatus}%
                          </Animated.Text>
                      </View>*/}
                    </Body>
                  </Left>
                </CardItem>
              </Card>
            </Content>
          )}
        />
      </Container>
    );
  }
}

const raffles = [
  {
    title: 'Patalla 50" atvio',
    date: '13/01/2020',
    ticketcost: '500',
    sold: '10',
    tickets: '100',
    picture:
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
    description: 'description',
  },
  {
    title: 'Smartwatch Huawei Watch GT 2 Sport Negro',
    date: '13/01/2020',
    ticketcost: '500',
    sold: '10',
    tickets: '100',
    picture:
      'https://cdn1.coppel.com/images/catalog/pm/2432273-1.jpg',
    description: 'description',
  },
  {
    title: 'Smartphone Xiaomi Redmi Note 8 64 GB Azul Desbloqueado',
    date: '13/01/2020',
    ticketcost: '500',
    sold: '10',
    tickets: '100',
    picture:
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/e34f7e88-e192-4974-8834-1d1ae6e259d7_1.666dc7db40146170a074c5d3796737af.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
    description: 'description',
  },
];

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#26008D',
    paddingTop: 0,
  },
  container: {
    backgroundColor: '#F6F5FB',
  },
  card: {
    backgroundColor: '#FFFF',
  },

  // container: {
  //   width: '100%',
  //   height: 0,
  //   borderColor: '#B2B8D8',
  //   borderWidth: 3,
  //   borderRadius: 30,
  //   marginTop: 10,
  //   justifyContent: 'center',
  // },
  // inner: {
  //   width: '100%',
  //   height: 10,
  //   borderRadius: 15,
  //   backgroundColor: '#0028F7',
  // },
  // label: {
  //   fontSize: 23,
  //   color: 'black',
  //   position: 'absolute',
  //   zIndex: 1,
  //   alignSelf: 'center',
  // },
});
