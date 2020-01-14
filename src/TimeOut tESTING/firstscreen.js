import React, { Component } from 'react';
import {  View, Text,SafeAreaView,Button } from 'react-native';

export default class demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        intervalid:''
    };
  }

  componentDidMount()
  {
      let intervalid=setInterval(() => {
          console.warn("timeout call")
      }, 2000);
      console.warn("interval id=>",intervalid)
      this.setState({   
          intervalid:intervalid
      })
  }
  componentWillUnmount()
  {
      console.warn("call willunmouunt ")
      clearInterval(this.state.intervalid)
  }
  render() {
    return (  
      <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text> hello demo </Text>
        <Button title="press" onPress={()=>{
            this.props.navigation.navigate("SecondScreen")
        }}/>
      </SafeAreaView>
    );
  }
}
