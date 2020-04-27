import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import Details from './screens/Details';
import SideScreen from './screens/SideScreen';
import Announcement from './screens/MyAnnouncements/Announcement';

import CreateRaffle01 from './screens/CreateRaffle/01';
import CreateRaffle02 from './screens/CreateRaffle/02';
import CreateRaffle03 from './screens/CreateRaffle/03';

import CreateAcount01 from './screens/BankAcount/01';

import {Drawer} from 'native-base';

const AppNavigator = createAppContainer(
  createStackNavigator(
    {
      //Principal
      Login: Login,
      Home: Home,
      Details: Details,
      SideScreen: SideScreen,
      Announcement: Announcement,
      //crear rifas
      CreateRaffle01: CreateRaffle01,
      CreateRaffle02: CreateRaffle02,
      CreateRaffle03: CreateRaffle03,
      //create acount
      CreateAcount01: CreateAcount01,
    },
    {
      initialRouteName: 'Login',
    },
  ),
);

export default class CustomDrawer extends React.Component {
  closeDrawer = () => {
    this.drawer._root.close();
  };

  openDrawer = () => {
    this.drawer._root.open();
  };

  componentDidMount() {
    Home.closeDrawer = () => this.closeDrawer();
    Home.openDrawer = () => this.openDrawer();

    SideScreen.closeDrawer = () => this.closeDrawer();

    Announcement.closeDrawer = () => this.closeDrawer();
    Announcement.openDrawer = () => this.openDrawer();

    CreateRaffle01.closeDrawer = () => this.closeDrawer();
  }

  render = () => (
    <Drawer
      ref={ref => {
        this.drawer = ref;
      }}
      content={<SideScreen />}
      onClose={() => this.closeDrawer()}>
      <AppNavigator />
    </Drawer>
  );
}
