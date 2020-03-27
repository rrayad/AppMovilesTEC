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
} from 'native-base';
export default class raffle01 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected2: '',
    };
  }

  onValueChange2(value) {
    this.setState({
      selected2: value,
    });
  }

  render() {
    console.disableYellowBox = true;
    return (
      <Container>
        <Content style={{padding: 10}}>
          <Text note>Crear Anuncio</Text>
          <Label>Datos generales 1/3</Label>
          <Form>
            <Item stackedLabel>
              <Label style={{color: '#00147E'}}>Nombre del producto</Label>
              <Input />
            </Item>

            <Item stackedLabel>
              <Label style={{color: '#00147E'}}>Descripción</Label>
              <Input />
            </Item>

            <Item picker>
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{width: undefined}}
                placeholder="Estado del producto"
                placeholderStyle={{color: '#bfc6ea'}}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}>
                <Picker.Item label="Nuevo" value="key0" />
                <Picker.Item label="Usado" value="key1" />
              </Picker>
            </Item>
          </Form>
        </Content>
        <Footer>
          <Button bordered onPress={() => this.props.navigation.goBack()}>
            <Text>Cancelar</Text>
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
