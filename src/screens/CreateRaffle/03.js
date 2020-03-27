/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Text,
  Picker,
  Icon,
  Textarea,
  Right,
  Button,
  Footer,
  DatePicker,
  View,
  Left,
  Body,
  Title,
} from 'native-base';
export default class raffle03 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: '',
    };
    this.state = {chosenDate: new Date()};
    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate});
  }

  //static navigationOptions = {header: null};

  render() {
    console.disableYellowBox = true;
    return (
      <Container>
        {/*<Header>
          <Left>
            <Button transparent>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body/>
          <Right/>
        </Header>
        */}
        <Content style={{padding: 10}}>
          <Text style={{color: '#00147E'}} note>
            Crear Anuncio
          </Text>
          <Text></Text>
          <Label style={{color: '#00147E'}}>Datos de la cuenta 3/3</Label>
          <Text></Text>
          <Label style={{backgroundColor: '#FFD7D6', Header, color: '#FF3838'}}>
            No tienes uentas agregadas
          </Label>
          <Text></Text>
          <Form>
            <Label style={{color: '#00147E', fontSize: 13}}>
              Debes ingresar una cuenta bancaria para recibir los pagos
            </Label>
            <Text></Text>
            <Icon
              button
              name="add"
              style={{fontSize: 40, color: 'blue', fontWeight: 'bold'}}
              onPress={() => this.props.navigation.push('CreateAcount01')}
            />
          </Form>
        </Content>
        <Footer>
          <Button bordered onPress={() => this.props.navigation.goBack()}>
            <Text>Regresar</Text>
          </Button>
          <Button
            block
            warning
            onPress={() => this.props.navigation.push('CreateRaffle02')}>
            <Text>Continuar</Text>
          </Button>
        </Footer>
      </Container>
    );
  }
}
