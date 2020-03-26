/* eslint-disable */
import React, {Component} from 'react';
import {StyleSheet, Animated, View, Image} from 'react-native';
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
  Badge,
  ListItem,
  CheckBox,
} from 'native-base';

export default class Announcement extends Component {
  constructor(props) {
    super(props);

    global.allProducts = [];

    this.state = {
      loading: false,
      progressStatus: 50,
      allProducts: [],
    };
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

  static navigationOptions = () => {
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
          <Left>
            <Button transparent>
              <Icon name="menu" onPress={() => Announcement.openDrawer()} />
            </Button>
          </Left>
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
    fetch('http://0.0.0.0:8080/raffles/get/seller/5ruben/', {
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

  render() {
    return (
      <Container>
        <View style={{padding: 20}}>
          <Text style={{fontSize:20, fontWeight:"bold"}}>Mis anuncios</Text>
          <Text />
          <Icon
            name="add"
            style={{fontSize: 40, color: 'blue', fontWeight: 'bold'}}
          />
        </View>
        {/* LISTA PRINCIPAL */}
        <Content>
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
                      <Image
                        source={{uri: item.pictures[0]}}
                        style={{height: 200, width: null, flex: 1}}
                      />

                      <Body>
                        <Text>{item.title}</Text>

                        <ListItem>
                          <CheckBox color="blue" />
                          <Body>
                            <Text note>
                              {moment(item.created).format(
                                'MMMM Do YYYY',
                              )}
                            </Text>
                          </Body>
                        </ListItem>
                        <ListItem>
                          <CheckBox color="red" />
                          <Body>
                            <Text note>
                              {moment(item.created).format(
                                'MMMM Do YYYY',
                              )}
                            </Text>
                          </Body>
                        </ListItem>
                        <ListItem>
                          <Body>
                            <Text>Costo del Boleto: $ {item.ticketcost}</Text>
                            <Text note>
                              {item.sold}/{item.tickets} boletos
                            </Text>
                          </Body>
                        </ListItem>
                      </Body>
                    </Left>
                  </CardItem>
                  <View style={styles.container}>
                    <Animated.View
                      style={[styles.inner, {width: item.sold + '%'}]}
                    />
                    <Animated.Text style={styles.label}>
                      {((item.sold *100)/item.tickets).toFixed(0)}%
                    </Animated.Text>
                  </View>
                </Card>
              </Content>
            )}
          />
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 0,
    borderColor: '#B2B8D8',
    borderWidth: 5,
    borderRadius: 100,
    marginTop: 0,
    justifyContent: 'center',
    height: 10,
  },
  inner: {
    width: '100%',
    height: 15,
    borderRadius: 100,
    backgroundColor: '#0028F7',
  },
  label: {
    fontSize: 15,
    color: 'white',
    position: 'absolute',
    zIndex: 1,
    alignSelf: 'center',
  },
});
