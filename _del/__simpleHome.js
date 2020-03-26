/* eslint-disable */
//1.-
import {AsyncStorage} from 'react-native';

import React, {Component} from 'react';
import styles from './styles';
import {Header, View, Text} from 'native-base';
import {Buttons} from './../design/buttons';

export default class Home extends Component {
  // create a function that saves your data asyncronously
  //2.- 
  _storeData = async () => {
    try {
      //guardar el primer elemento.
      await AsyncStorage.setItem('userName', 'Ruben');
      await AsyncStorage.setItem('password', '');
      this.props.navigation.push('Info');
    } catch (error) {
      // Error saving data
    }
  };

  render() {
    return (
      <View>
        <Header />
        <View>
          <Buttons colorMain>
            <Text
              button
              onPress={() => this._storeData()}
              style={styles.buttonText}>
              Save name & continue
            </Text>
          </Buttons>
        </View>
        <Text />
      </View>
    );
  }
}
