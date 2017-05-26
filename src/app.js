import React, { Component } from 'react';

import {
  View,
} from 'react-native';

import {
  Header,
  Card,
  CardSection,
  Button,
  Spinner
} from './components/common';


class App extends Component {
  render() {
    return (
      <View>
        <Header headerText='Authentication App' />
      </View>
    );
  }
} // End: App

export default App;
