/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {FlatList} from 'react-native-gesture-handler';

import {Dimensions, StyleSheet} from 'react-native';
const screenWidth = Dimensions.get('window').width;
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';

import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Button,
  View,
  Left,
  Thumbnail,
  H1,
  H2,
  H3,
} from 'native-base';
export default class extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Content style={{padding: 10}}>
            <Text />
            <Text>Mis anuncions</Text>
            <Text />
            <Button
              rounded
              bordered={{color: '#095161'}}
              style={{backgroundColor: 'transparent', width: 45}}>
              <Text style={{color: '#095161'}}>+</Text>
            </Button>
            <Text />
          </Content>
          <Content>
            <FlatList
              style={{top: 0}}
              data={products}
              renderItem={({item}) => (
                <View>
                  <View style={styles.row}>
                    <View style={[styles.box, styles.box2]}>
                      <Card>
                        <CardItem                          
                          button
                          onPress={() =>
                            this.props.navigation.push('Details', {
                              title: item.title,
                              likes: item.likes,
                              unlikes: item.unlikes,
                              comments: item.comments,
                              pictures: item.pictures,
                              description: item.description,
                            })
                          }>
                          <Left>
                            <Thumbnail source={{uri: item.pictures[0]}} />
                            <Body>
                              <Text>{item.title}</Text>
                              <Text note>{item.description}</Text>
                            </Body>
                          </Left>
                        </CardItem>
                      </Card>
                    </View>
                    <View style={[styles.box]}>
                      <ProgressChart
                        data={item.graph}
                        width={screenWidth / 2.5}
                        height={110}
                        chartConfig={chartConfig}
                        hideLegend={true}
                      />
                    </View>
                  </View>
                </View>
              )}
            />
          </Content>
        </Content>
      </Container>
    );
  }
}

const products = [
  {
    _id: '5e5442d7c62ef1fb64728200',
    title: 'MacBook Pro',
    description: 'Laptop MacBook Pro 2014 16 GB RAM Core i7',
    category: 'computers',
    expired: '2020-03-31T15:15:00Z',
    tickets: '100',
    ticketcost: '1000',
    seller: '5e5440d6c62ef1fb1892ee5c',
    pictures: [
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
      'https://www.asus.com/media/global/products/TuP2SsEBgN865xmv/P_setting_fff_1_90_end_500.png',
    ],
    created: '2020-02-24T15:15:00Z',
    updated: 'Mon, 24 Feb 2020 16:24:32 GMT',
    updatedby: 'admin@rifas.com',
    graph: {
      labels: ['$'], // optional
      data: [0.7],
    },
    tags: [
      {
        '': '',
      },
      {
        '': '',
      },
    ],
    isActive: 'false',
    likes: 0,
    unlikes: 0,
    comments: 1,
  },
];

const chartConfig = {  
  backgroundGradientFromOpacity: 0,
  backgroundGradientToOpacity: 0,
  color: (opacity = 1) => `rgba(0, 39, 242, ${opacity})`,
  
};

const styles = StyleSheet.create({
  row: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    
  },
  box: {
    
    height: "100%",
    width:"65%",
  backgroundColor:"white"
  },
  box2: {},
});
