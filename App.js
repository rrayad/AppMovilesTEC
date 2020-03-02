/* eslint-disable */
import React, { Component, Container } from 'react';
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from './screens/Login'
import Home from './screens/Home'
import Details from './screens/Details'
import Info from './screens/Info'



class App extends Component {
  render() {return (<Container />);}
}

const AppNavigator = createStackNavigator(
  {
    Login:Login,    
    Home:Home,
    Details:Details,
    Info:Info
  },
  {
    initialRouteName: "Home"
  }
);

export default createAppContainer(AppNavigator);