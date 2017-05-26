import React, { Component } from 'react';

import {
  View,
} from 'react-native';

import {
  Header,
  Button,
  Spinner
} from './components/common';

import LoginForm from './components/LoginForm';


class App extends Component {

  state = { loggedIn: false };


  renderContent() {
    switch (this.state.loggedIn) {
      case true:
        return <Button>Log out</Button>;
        break;
      case false:
        return <LoginForm />;
        break;
      default:
        return <Spinner size="large"/>;
    }
  }

  render() {
    return (
      <View>
        <Header headerText='Authentication App' />
        {this.renderContent()}
      </View>
    );
  }
} // End: App

export default App;
