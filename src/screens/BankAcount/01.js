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
export default class CreateAcount01 extends Component {
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
        
          <Label style={{color: '#00147E'}}>Agregar cuenta bancaria</Label>

          <Form>
            <Item stackedLabel>
              <Label style={{color: '#00147E'}}>Nombre de la tarjeta</Label>
              <Input keyboardType="decimal-pad" />
            </Item>

            <Item stackedLabel>
              <Label style={{color: '#00147E'}}>Número de la tarjeta</Label>
              <Input keyboardType="decimal-pad" />
            </Item>
            <DatePicker
              defaultDate={new Date(2020, 3, 3)}
              minimumDate={new Date(2020, 3, 3)}
              maximumDate={new Date(2022, 12, 31)}
              locale={'es'}
              Icon={<Icon name="arrow-down" />}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'slide'}
              androidMode={'default'}
              placeHolderText="Mes de vencimiento"
              textStyle={{color: 'green'}}
              placeHolderTextStyle={{color: '#00147E'}}
              onDateChange={this.setDate}
              disabled={false}
            />
            <DatePicker
              defaultDate={new Date(2020, 3, 3)}
              minimumDate={new Date(2020, 3, 3)}
              maximumDate={new Date(2022, 12, 31)}
              locale={'es'}
              Icon={<Icon name="arrow-down" />}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={'slide'}
              androidMode={'default'}
              placeHolderText="Año de vencimiento"
              textStyle={{color: 'green'}}
              placeHolderTextStyle={{color: '#00147E'}}
              onDateChange={this.setDate}
              disabled={false}
            />
            <Item stackedLabel>
              <Label style={{color: '#00147E'}}>CVV</Label>
              <Label></Label>
            </Item>
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
