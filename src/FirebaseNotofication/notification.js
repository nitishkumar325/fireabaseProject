import React, { Component } from 'react';
import { View, Text,SafeAreaView } from 'react-native';

export default class notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text> notification Demo </Text>
      </SafeAreaView>
    );
  }
}
