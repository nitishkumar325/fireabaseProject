import React, { Component } from 'react';
import {  View, Text,SafeAreaView } from 'react-native';

export default class SecondScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <SafeAreaView>
        <Text> Second Screen </Text>
      </SafeAreaView>
    );
  }
}
