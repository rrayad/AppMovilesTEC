import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

export default class com_new_item extends Component {
  render() {
    return (
      <View style={styles.itemsList}>
        <Text>Rubens</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  itemsList: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  itemtext: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
