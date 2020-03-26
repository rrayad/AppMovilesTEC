/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Container, Left, Text} from 'native-base';

export default class createRaffle01 extends Component {
  render() {
    return (
      <Container>
        <Left>
          <Text button onPress={() => this.props.navigation.push('Login')}>
            Mis anuncios
          </Text>
        </Left>
      </Container>
    );
  }
}
