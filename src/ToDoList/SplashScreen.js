import React, { PureComponent } from 'react';
import {  View, Text,StyleSheet,Easing,Animated } from 'react-native';
import * as Animatable from 'react-native-animatable';

export default class SplashScreen extends React.Component {
  static navigationOptions = {
    header: null
}
  render() {
    return (
      <View style={styles.parentBody}>
  <Animatable.Text style={{color:'white'}}
  animation={zoomOut} 
  duration={2000} 
  onAnimationEnd={()=>{
  this.props.navigation.navigate('AddToDoListScreen')
}} >My Notes</Animatable.Text>

      </View>
    );
  }
}

const styles = StyleSheet.create({
 welcomeContainner:{
   height:200,
   width:200,
   backgroundColor:'red'
 },
 parentBody:{
justifyContent:'center',
alignItems:'center',flex:1,
backgroundColor:'red',color:'white'
 } 
});
const zoomOut = {
  0: {
    opacity: 0,
    scale:0.1,
  },
  0.1: {
    opacity: 0.5,
    scale:0.6
   
  },


  // 1: {
  //   opacity: 1,
  //   scale: 1,
  //   duration:100
  // },
};
