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
    ////////////////////////////////////////////[ GET INFO FROM DB ]////////////////////////////////////////////////////
    fetch('https://366dd267.ngrok.io/productos')
      .then(response => response.json())
      .then(responseJson => {
        this.setState({getProducts: responseJson})        
      })
      .catch(error => console.log("no hay conexion")); 
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
                  <Text style={{fontWeight:"bold"}}>{item.type}</Text>
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
