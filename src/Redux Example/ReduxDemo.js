import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';
import Child from './FunctionComponent/ReduxComponent'


export default class ReduxDemo extends React.Component {
  render() {
    console.warn("render call parent")
    return (

      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Child/>
      </View>

    );
  }
}
