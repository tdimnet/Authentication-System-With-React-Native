import React, { Component } from 'react';

import {
  View,
} from 'react-native';

import firebase from 'firebase';

import {
  Header,
  Button,
  Spinner
} from './components/common';

import LoginForm from './components/LoginForm';


class App extends Component {

  state = { loggedIn: null };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAbOOmYJW3Slf9vJqC2b6hwRwLU9NqHdRo",
      authDomain: "authenticationapp-597f6.firebaseapp.com",
      databaseURL: "https://authenticationapp-597f6.firebaseio.com",
      projectId: "authenticationapp-597f6",
      storageBucket: "authenticationapp-597f6.appspot.com",
      messagingSenderId: "880542263898"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true })
      } else {
        this.setState({ loggedIn: false })
      }
    });
  }


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
