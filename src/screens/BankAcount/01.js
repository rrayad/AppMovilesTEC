/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Container, Content, Label, Text, Button, Footer} from 'native-base';
import Openpay, {createDeviceSessionId} from 'openpay-react-native';

export default class CreateAcount01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: '',
      loading: false,
    };
  }

  successToken = response => {
    const deviceSessionId = createDeviceSessionId();
    console.log('createDeviceSessionId', deviceSessionId);
    console.log('successToken', response);
    this.setState(() => ({loading: false}));
  };

  failToken = response => {
    console.log('failToken', response);
  };

  render() {
    const address = {
      city: 'Querétaro',
      country_code: 'MX',
      postal_code: '76900',
      line1: 'Av 5 de Febrero',
      line2: 'Roble 207',
      line3: 'Col Carrillo',
      state: 'Queretaro',
    };

    console.disableYellowBox = true;
    return (
      <Container>
        <Content style={{padding: 10}}>
          <Label style={{color: '#00147E'}}>Agregar cuenta bancaria</Label>

          <Openpay
            isProductionMode={false}
            merchantId="mze08xpn4nwebj28vkub"
            publicKey="pk_92d1db787d64494991fb0416ef05467e"
            address={address}
            successToken={this.successToken}
            failToken={this.failToken}
            loading={this.state.loading}
          />
        </Content>
        <Footer>
          <Button bordered onPress={() => this.props.navigation.goBack()}>
            <Text>Regresar</Text>
          </Button>
          <Button
            block
            warning
            onPress={() => this.props.navigation.push('CreateRaffle03')}>
            <Text>Continuar</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}
