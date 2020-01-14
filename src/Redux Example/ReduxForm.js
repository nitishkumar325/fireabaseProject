import React, { Component } from 'react';
import ClassComponent from './FunctionComponent/ClassComponent';
import { View } from 'react-native-animatable';
export default class ReduxForm extends Component {
  render() {
    return (
    <View>
      <ClassComponent/>
   </View>
    );
  }
}