import React from 'react';
import {
  Text,
  View
} from 'react-native';


const Header = (props) => {

  const { viewStyle, textStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textStyle}>
        {props.headerText}
      </Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 60,
    marginTop: 20,
    paddingTop: 15,
    paddingBottom: 15,
    backgroundColor: '#444'
  },
  textStyle: {
    fontSize: 20,
    color: '#fff',
  }
}


export { Header };
