/* eslint-disable */
import React, { Component, Container } from 'react';
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import Login from './screens/Login'
import Home from './screens/Home'
import Details from './screens/Details'
import Info from './screens/Info'
import AddItem from './screens/addItem'
import SimpleHome from './screens/simpleHome'
import List from './screens/List'




class App extends Component {
  render() {return (<Container />);}
}

const AppNavigator = createStackNavigator(
  {
    Login:Login,    
    Home:Home,
    Details:Details,
    Info:Info,
    AddItem:AddItem,
    SimpleHome:SimpleHome,
    List:List

  },
  {
    initialRouteName: "SimpleHome"
  }
);

export default createAppContainer(AppNavigator);