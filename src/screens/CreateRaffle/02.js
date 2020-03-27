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
} from 'native-base';
export default class raffle02 extends Component {
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

  render() {
    console.disableYellowBox = true;
    return (
      <Container>
        <Content style={{padding: 10}}>
          <Text note>Crear Anuncio</Text>
          <Label>Precio del producto 2/3</Label>

          <Form>
            <Item stackedLabel>
              <Label style={{color: '#00147E'}}>Número de boletos</Label>
              <Input keyboardType="decimal-pad" />
            </Item>

            <Item stackedLabel>
              <Label style={{color: '#00147E'}}>Precio total</Label>
              <Input keyboardType="decimal-pad" />
            </Item>

            <Item stackedLabel>
              <Label style={{color: '#00147E'}}>Precio por boleto</Label>
              <Label></Label>
            </Item>
            <DatePicker
              defaultDate={new Date(2020, 3, 3)}
              minimumDate={new Date(2020, 3, 3)}
              maximumDate={new Date(2022, 12, 31)}
              locale={'es'}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'slide'}
              androidMode={'default'}
              placeHolderText="Fecha límite de la rifa"
              textStyle={{color: 'green'}}
              placeHolderTextStyle={{color: '#d3d3d3'}}
              onDateChange={this.setDate}
              disabled={false}
            />
            <Text>{this.state.chosenDate.toString().substr(4, 12)}</Text>
          </Form>
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
