import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Button, Text, Toast } from 'native-base';

import login from '../api/login';
import initData from '../api/initData';
import * as storage from '../utils/storage'
import * as auth from '../utils/auth'

export default class Home extends Component {
  
  static navigationOptions = {
    navigationOptions: ({navigation}) => ({
      title: `${navigation.state.params.name}'s Profile'`,
    })
  };

  constructor(props) {
    super(props)
    this.state = {
      user: '',
    }
  }

  componentDidMount() {
    auth.getUserFromStore().then(user => {
      console.log(user)
    }).catch(e => {
      Toast.show({
        message: 'Sorry, you are not logged in',
        position: 'bottom',
        buttonText: 'Okay'
      });
      this.props.navigation.navigate('Login')
    });
    //  {
    //   this.props.navigation.navigate('Login')
    // } else {
    //   if(!auth.getBundleFromStore) {
    //     initData().then(response => {
    //       storage.set('bundle', response.configuration);
    //     }).catch(e => {
    //       this.props.navigation.navigate('UpdateStore');
    //     })
    //   }
    //   this.setState({ user: storage.get('user') })
    // }
  }

  render() {
    console.log(auth.getBundleFromStore())
    return (
      <Container>
        <Header />
        <Content>
          <Button block success onPress={() => this.props.navigation.navigate('StartPayment')}>
            <Text>Start Payment</Text>
          </Button>
          <Button block danger onPress={() => this.props.navigation.navigate('UpdateStore')}>
            <Text>Update</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}