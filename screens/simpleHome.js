/* eslint-disable */
import React, {Component} from 'react';
import {FlatList} from 'react-native-gesture-handler';
import {
  Container,
  Header,
  Content,
  View,
  Item,
  Input,
  Right,
  Icon,
  Text,
  Button,
  Left,
  Body,
  Card,
  CardItem,
  Thumbnail,
} from 'native-base';

export default class Home extends Component {

  constructor(props) {
    super(props);

    global.getProducts = [];

    this.state = {      
      getProducts: [],
    };
    
  }

  componentDidMount() {
    console.log("iniciando peticion")
    ////////////////////////////////////////////[ GET INFO FROM DB ]////////////////////////////////////////////////////
    fetch('https://api.scryfall.com/cards/named?fuzzy=Decimate',
    {
      method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-type': 'application/json'
        }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson)
        this.setState({getProducts: responseJson})        
      })
      .catch((error) => console.log('fetchToken error: ', error))
    .done();
  }


  render() {    
    return (      
      <View>
        <FlatList
          data={this.state.getProducts}
          renderItem={({item}) => (
            <Card>
              <CardItem>
                <Body>
                  <Text style={{fontWeight:"bold"}}>{item.artist}</Text>
                </Body>
              </CardItem>
              <CardItem>
                <Body>
                <Thumbnail
                      style={{height: 100, width: 100, flex: 1}}
                      source={{uri: item.image}}
                    />
                  <Text>{item.description}</Text>
                </Body>
              </CardItem>
            </Card>
          )}
        />
      </View>
    );
  }
}
