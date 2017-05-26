import React, { Component } from 'react';
import {
  TextInput,
  View,
} from 'react-native';


class LoginForm extends Component {
  render() {
    return (
      <View style={{justifyContent: 'center'}} >
        <TextInput
          style={{backgroundColor: '#eee', height: 50}}
        />
      </View>
    );
  }
} // End: LoginForm

export default LoginForm;
