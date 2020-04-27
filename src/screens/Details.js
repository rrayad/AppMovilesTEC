/* eslint-disable */
import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import moment from 'moment';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  Animated,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {
  Container,
  Content,
  Button,
  Thumbnail,
  Text,
  ListItem,
  List,
  Card,
  CardItem,
  Header,
  Badge,
  Body,
  Left,
  Right,
  Input,
  Item,
} from 'native-base';
const window = Dimensions.get('window');
export const IMAGE_HEIGHT = window.height / 4;
export const IMAGE_WIDTH = window.width / 2.5;

import {SliderBox} from 'react-native-image-slider-box';

export default class Details extends Component {
  constructor(props) {
    super(props);
    const {navigation} = props;
    (global.navigation = navigation),
      (global.pictures = global.navigation.getParam('pictures')),
      (this.state = {
        loading: false,
        dataSource: [],
        counter: 0,
        total: 0,
        images: [
          'https://keilahradio.com/wp-content/uploads/2018/11/104325883_gettyimages-966879354.jpg',
          'https://www.lalolaapp.com/wp-content/uploads/2018/10/ofertas-01.png',
          'https://www.muycomputer.com/wp-content/uploads/2018/07/Rebajas-Verano-PlayStation-Store-e1532535132599.png',
          'https://www.golfelchaparral.com/wp-content/uploads/2016/06/oferta-verano-2016-el-chaparral-golf-club-costa-del-sol.jpg', // Network image
          require('../images/login/firstImageCarrousel.png'), // Local image
        ],
      });
  }
  static navigationOptions = {header: null};
  // static navigationOptions = () => {
  //   return {
  //     /*
  //     headerTitle: (
  //       <Thumbnail style={{marginTop:190, height: 200, width: 200, flex: 1}}  square large source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }} />
  //     ),
  //     */

  //     headerStyle: {
  //       backgroundColor: '#fff',
  //     },
  //     headerTintColor: '#626262',
  //     headerTitleStyle: {
  //       fontWeight: 'bold',
  //     },
  //   };
  // };

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

  addTicket = tipo => {
    if (tipo == 'plus') {
      this.setState({
        counter: this.state.counter + 1,
      });
    } else {
      if (this.state.counter < 1) {
      } else {
        this.setState({
          counter: this.state.counter - 1,
        });
      }
    }
  };

  componentDidMount() {
    console.disableYellowBox = true;
  }

  Item({title}) {
    return (
      <View>
        <Text>{title}</Text>
      </View>
    );
  }

  render() {
    if (this.state.loading) {
      return (
        <View>
          <ActivityIndicator size="large" color="red" />
        </View>
      );
    }
    return (
      <Container style={{backgroundColor: '#F6F5FB'}}>
        <Header noShadow>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-circle-left" size={25} color="#26008D" />
            </Button>
          </Left>
        </Header>
        <Content style={{padding: 5}}>
          <SliderBox
            sliderBoxHeight={IMAGE_HEIGHT}
            images={raffle.picture}
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
          <Card style={{padding: 10}}>
            <CardItem style={{backgroundColor: '#26008D', height: 50}}>
              <Left>
                <Button vertical transparent light>
                  <Icon name="thumbs-up" size={23} color="white" />
                  <Text style={{fontWeight: 'bold'}}>7</Text>
                </Button>
              </Left>
              <Right>
                <Button vertical transparent light>
                  <Icon name="comment" size={23} color="white" />
                  <Text style={{fontWeight: 'bold'}}>7</Text>
                </Button>
              </Right>
            </CardItem>
            <CardItem>
              <Body style={{alignItems: 'center'}}>
                <Text style={styles.title}>{raffle.title}</Text>
                <Text note style={styles.label}>
                  Fecha de inicio
                </Text>
                <Text style={styles.label}>
                  {moment(global.navigation.getParam('expired')).format(
                    'MMMM Do YYYY, h:mm:ss a',
                  )}
                </Text>
                <Text note style={styles.label}>
                  Fecha de vencimiento
                </Text>
                <Text style={styles.label}>
                  {moment(global.navigation.getParam('expired')).format(
                    'MMMM Do YYYY, h:mm:ss a',
                  )}
                </Text>
                <Text note style={styles.label}>
                  Costo por boletos
                </Text>
                <Text style={styles.label}>${raffle.ticketcost}</Text>
                <Text note style={{fontSize: 12, fontWeight: 'bold'}}>
                  Boletos vendidos
                </Text>
                <Text style={styles.label}>
                  {raffle.sold} de {raffle.tickets}
                </Text>
              </Body>
            </CardItem>

            <View style={styles.container}>
              <Animated.View
                style={[styles.inner, {width: raffle.sold + '%'}]}
              />
              {/*<Animated.Text style={styles.label}>
                            {this.state.progressStatus}%
                          </Animated.Text>*/}
            </View>

            <CardItem style={{alignSelf: 'center'}}>
              <Icon
              style={styles.addButton}     
                onPress={() => {
                  this.addTicket('minus');
                }}
                name="minus-circle"
                size={30}
                color="#4EEACF"
              />
              <Text style={{fontSize: 30, left:20, width: 60, height: 40}}>
                {this.state.counter}
              </Text>

              <Icon
              style={styles.addButton}              
                onPress={() => {
                  this.addTicket('plus');
                }}
                name="plus-circle"
                size={30}
                color="#4EEACF"
              />
            </CardItem>
            <CardItem style={{alignSelf: 'center'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total: ${this.state.counter * raffle.ticketcost}
              </Text>
            </CardItem>
            <CardItem style={{alignSelf: 'center'}}>
              <TouchableOpacity>
                <View style={styles.button}>
                  <Text button style={styles.buttonText}>
                    COMPRAR
                  </Text>
                </View>
              </TouchableOpacity>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{fontWeight: 'bold'}}>Descripción</Text>
                <Text />
                <Text style={styles.descriptionLabel}>
                  {raffle.description}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Content>
                <Text style={{fontWeight: 'bold'}}>Productos similares</Text>
                <Text />
                <FlatList
                  horizontal={true}
                  data={raffles}
                  renderItem={({item}) => (
                    <View style={{width: IMAGE_WIDTH}}>
                      <Card>
                        <CardItem>
                          <Body style={{alignItems: 'center'}}>
                            <Thumbnail
                              small
                              source={{
                                uri: item.picture[0],
                              }}
                            />
                            <Text>{item.title}</Text>
                            <Text
                              style={{
                                backgroundColor: '#E5FDFA',
                                color: '#2F7C72',
                              }}>
                              45 / 100
                            </Text>
                          </Body>
                        </CardItem>
                      </Card>
                    </View>
                  )}
                />
              </Content>
            </CardItem>
            <CardItem>
              <Body>
                <Text style={{fontWeight: 'bold'}}>
                  Preguntas sobre el producto
                </Text>
                <Item>
                  <Input
                    backgroundColor="#EDECF2"
                    placeholderTextColor="#A1A1A4"
                    placeholder="Escribir una pregunta"
                  />
                </Item>
                <Text />
                <TouchableOpacity style={{alignSelf: 'flex-end'}}>
                  <View style={styles.button}>
                    <Text button style={styles.buttonText}>
                      ENVIAR
                    </Text>
                  </View>
                </TouchableOpacity>
              </Body>
            </CardItem>
            <CardItem>
              <Content>
                <List>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail
                        small
                        source={{
                          uri:
                            'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2444798238877374&height=50&width=50&ext=1589937161&hash=AeQTWxpKQAtP31Wo',
                        }}
                      />
                    </Left>
                    <Body>
                      <Text>Kumar Pratik</Text>
                      <Text note>
                        Doing what you like will always keep you happy . . Doing
                        what you like will always keep you happy . . Doing what
                        you like will always keep you happy . .
                      </Text>
                    </Body>
                  </ListItem>
                  <ListItem avatar>
                    <Left>
                      <Thumbnail
                        small
                        source={{
                          uri:
                            'https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=2444798238877374&height=50&width=50&ext=1589937161&hash=AeQTWxpKQAtP31Wo',
                        }}
                      />
                    </Left>
                    <Body>
                      <Text>Kumar Pratik</Text>
                      <Text note>
                        Doing what you like will always keep you happy . . Doing
                        what you like will always keep you happy . . Doing what
                        you like will always keep you happy . .
                      </Text>
                    </Body>
                  </ListItem>
                </List>
              </Content>
            </CardItem>
          </Card>
          <View />
        </Content>
        {/* 
        <Footer>
          <FooterTab>
            <Button transparent>
              <Icon name="thumbs-up" />
              <Text>{global.navigation.getParam('likes')}</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button transparent>
              <Icon name="thumbs-down" />
              <Text>{global.navigation.getParam('unlikes')}</Text>
            </Button>
          </FooterTab>
          <FooterTab>
            <Button transparent>
              <Icon name="chatbubbles" />
              <Text>{global.navigation.getParam('comments')}</Text>
            </Button>
          </FooterTab>
        </Footer>
        */}
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: '#B7ABDA',
    height: 10,
    borderColor: '#B7ABDA',
    borderWidth: 1,
    borderRadius: 0,
    justifyContent: 'center',
  },
  inner: {
    width: '100%',
    height: 10,
    backgroundColor: '#26008D',
  },
  label: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  descriptionLabel: {
    alignSelf: 'auto',
  },
  title: {
    color: '#26008D',
    fontWeight: 'bold',
    paddingBottom: 10,
  },
  button: {
    width: 150,
    borderColor: '#4EEACF',
    borderWidth: 5,
    borderRadius: 5,
    backgroundColor: '#4EEACF',
    justifyContent: 'center',

    shadowColor: '#B7ABDA',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 5,
    shadowOpacity: 0.8,
  },
  addButton:{
    shadowColor: 'lightgrey',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 3,
    shadowOpacity: 0.5,
  },
  buttonText: {
    color: '#0F0F0F',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const raffle = {
  id: 123,
  title: 'Smartphone Xiaomi Redmi Note 8 64 GB Azul Desbloqueado',
  date: '13/01/2020',
  ticketcost: '500',
  sold: '70',
  tickets: '100',
  picture: [
    'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/e34f7e88-e192-4974-8834-1d1ae6e259d7_1.666dc7db40146170a074c5d3796737af.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
    'https://cdn1.coppel.com/images/catalog/pm/2432273-1.jpg',
    'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
  ],

  description:
    'Samsung Galaxy A51 Pantalla de 6.51 pulgadas Resolución de 1080 x 2400 Memoria interna 128GB/4GB RAM Pantalla de 6.51 pulgadas Resolución de 1080 x 2400 Memoria interna 128GB/4GB RAM',
};

const raffles = [
  {
    id: 123,
    title: 'Smartphone Xiaomi Redmi Note 8 64 GB Azul Desbloqueado',
    date: '13/01/2020',
    ticketcost: '500',
    sold: '70',
    tickets: '100',
    picture: [
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/e34f7e88-e192-4974-8834-1d1ae6e259d7_1.666dc7db40146170a074c5d3796737af.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
      'https://cdn1.coppel.com/images/catalog/pm/2432273-1.jpg',
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
    ],

    description:
      'Samsung Galaxy A51 Pantalla de 6.51 pulgadas Resolución de 1080 x 2400 Memoria interna 128GB/4GB RAM Pantalla de 6.51 pulgadas Resolución de 1080 x 2400 Memoria interna 128GB/4GB RAM',
  },
  {
    id: 123,
    title: 'Smartphone Xiaomi Redmi Note 8 64 GB Azul Desbloqueado',
    date: '13/01/2020',
    ticketcost: '500',
    sold: '70',
    tickets: '100',
    picture: [
      'https://cdn1.coppel.com/images/catalog/pm/2432273-1.jpg',
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/e34f7e88-e192-4974-8834-1d1ae6e259d7_1.666dc7db40146170a074c5d3796737af.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
      'https://cdn1.coppel.com/images/catalog/pm/2432273-1.jpg',
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
    ],

    description:
      'Samsung Galaxy A51 Pantalla de 6.51 pulgadas Resolución de 1080 x 2400 Memoria interna 128GB/4GB RAM Pantalla de 6.51 pulgadas Resolución de 1080 x 2400 Memoria interna 128GB/4GB RAM',
  },
  {
    id: 123,
    title: 'Smartphone Xiaomi Redmi Note 8 64 GB Azul Desbloqueado',
    date: '13/01/2020',
    ticketcost: '500',
    sold: '70',
    tickets: '100',
    picture: [
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
      'https://cdn1.coppel.com/images/catalog/pm/2432273-1.jpg',
      'https://res.cloudinary.com/walmart-labs/image/upload/w_960,dpr_auto,f_auto,q_auto:best/mg/gm/3pp/asr/e34f7e88-e192-4974-8834-1d1ae6e259d7_1.666dc7db40146170a074c5d3796737af.jpeg?odnHeight=2000&odnWidth=2000&odnBg=ffffff',
      'https://cdn1.coppel.com/images/catalog/pm/2432273-1.jpg',
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
    ],

    description:
      'Samsung Galaxy A51 Pantalla de 6.51 pulgadas Resolución de 1080 x 2400 Memoria interna 128GB/4GB RAM Pantalla de 6.51 pulgadas Resolución de 1080 x 2400 Memoria interna 128GB/4GB RAM',
  },
];
