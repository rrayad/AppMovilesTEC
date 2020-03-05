/* eslint-disable */
import React, { Component, Container } from 'react';
import  { StyleSheet } from 'react-native';
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from './screens/Login'
import Home from './screens/Home'
import Details from './screens/Details'
import Info from './screens/Info'
import AddItem from './screens/addItem'
import SimpleHome from './screens/simpleHome'
import List from './screens/List'

import NewItem_01 from './screens_new_item/newItem_01'




class App extends Component {

  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./images/login/logo.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };

  render() {
    return (
      <Button
        onPress={() => this.props.navigation.navigate('Details')}
        title="Go to notifications"
      />
    );
  }
}

class MyNotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./images/login/logo.png')}
        style={[styles.icon, { tintColor: tintColor }]}
      />
    ),
  };
  
  render() {return (<Container />);}
}

const AppNavigator = createStackNavigator(
  {
    //Principal
    Login:Login,    
    Home:Home,
    Details:Details,
    //
    NewItem_01:Home

  },
  {
    initialRouteName: "NewItem_01"
  }
);

const styles = StyleSheet.create({
  icon: {
    width: 24,
    height: 24,
  },
});


export default createAppContainer(AppNavigator);

