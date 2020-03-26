/* eslint-disable */
import React, {Component} from 'react';
import moment from 'moment';
import {
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  View,
  Animated,
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
  CardItem,
} from 'native-base';

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
      });
  }

  static navigationOptions = () => {
    return {
      /*
      headerTitle: (
        <Thumbnail style={{marginTop:190, height: 200, width: 200, flex: 1}}  square large source={{ uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg' }} />
      ),
      */
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
          <FlatList
            horizontal={true}
            data={global.navigation.getParam('pictures')}
            renderItem={({item}) => (
              <Content>
                <Card style={{elevation: 3}}>
                  <CardItem cardBody>
                    <Thumbnail
                      style={{height: 200, width: 400, flex: 1}}
                      source={{uri: item}}
                    />
                  </CardItem>
                </Card>
              </Content>
            )}
          />
          <Card style={{padding: 5}}>
            <CardItem>
              <Text>{global.navigation.getParam('title')}</Text>
            </CardItem>
            <CardItem>
              <Text style={{fontSize: 12}}>
                Fecha de vencimiento
                <Text style={{color: 'red', fontSize: 13}}>
                  {' '}
                  {moment(global.navigation.getParam('expired')).format(
                    'MMMM Do YYYY, h:mm:ss a',
                  )}{' '}
                </Text>
              </Text>
            </CardItem>
            <CardItem>
              <Text style={{fontSize: 12}}>
                {' '}
                ${global.navigation.getParam('ticketcost')} por boleto
              </Text>
            </CardItem>
            <CardItem>
              <Text style={{fontSize: 12}}>
                {' '}
                {global.navigation.getParam('sold')}/
                {global.navigation.getParam('tickets')} boletos vendidos
              </Text>
            </CardItem>
            <CardItem>
              <View style={styles.container}>
                <Animated.View
                  style={[
                    styles.inner,
                    {width: global.navigation.getParam('tickets') + '%'},
                  ]}
                />
                {/*<Animated.Text style={styles.label}>
                            {this.state.progressStatus}%
                          </Animated.Text>*/}
              </View>
            </CardItem>
            <CardItem style={{alignSelf: 'center'}}>
              <TouchableOpacity
                onPress={() => {
                  this.addTicket('minus');
                }}>
                <Icon
                  name="remove"
                  style={{fontSize: 40, color: 'blue', fontWeight: 'bold'}}
                />
              </TouchableOpacity>
              <Text style={{fontSize: 35, width: 40, height: 40}}>
                {this.state.counter}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.addTicket('plus');
                }}>
                <Icon
                  name="add"
                  style={{fontSize: 40, color: 'blue', fontWeight: 'bold'}}
                />
              </TouchableOpacity>
            </CardItem>
            <CardItem style={{alignSelf: 'center'}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Total: $
                {this.state.counter * global.navigation.getParam('ticketcost')}
              </Text>
            </CardItem>
            <CardItem style={{alignSelf: 'center'}}>
              <Button rounded warning>
                <Text>Pagar</Text>
              </Button>
            </CardItem>
            <CardItem>
              <Text style={{fontSize: 12}}>
                {global.navigation.getParam('description')}
              </Text>
            </CardItem>
          </Card>

          <View></View>
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
