import React, { PureComponent } from 'react';
import {  View, Text,TouchableOpacity,Animated ,StyleSheet,Easing} from 'react-native';
import InstagramLogin from 'react-native-instagram-login'


export default class instagramLogin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        token: '',
        xvalue:new Animated.Value(0),
        fadevalue:new Animated.Value(0),
        show:false
      }
  }

  animatedButton=()=>{
    Animated.timing(this.state.fadevalue,{
      toValue:1,
      duration:3000,

    }).start(()=>{
      this.setState({
        fadevalue:new Animated.Value(0)
      })
    })
  }
  moveAnimation=()=>{
    this.setState({
      show:true
    },()=>{
      Animated.timing(this.state.xvalue,{
        toValue:100,
        duration:800,
        Easing:Easing.linear
      }).start(
        
      );
    })
  }
  pressYes=()=>{
//this.forceUpdate()
    Animated.timing(this.state.xvalue,{
      toValue:-100,
      duration:800,
      Easing:Easing.linear
    }).start();
  }
  render() {
    console.warn("render call")
    return (
        <View style={{ flex: 1}}>
           {this.state.show?<Animated.View style={[styles.animationView,{top:this.state.xvalue}]}>
             <TouchableOpacity onPress={this.pressYes}><Text style={{backgroundColor:'yellow'}} >Yes</Text></TouchableOpacity>
             <Text  style={{backgroundColor:'pink'}}>No</Text>
           </Animated.View>:null}
        <TouchableOpacity onPress={this.moveAnimation} 
          style={{
            borderRadius: 5,
            marginTop:'50%',
            backgroundColor: 'orange',
            height: 30, width: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}
         >
            <TouchableOpacity onPress={this.fadevalue} 
          style={{
            borderRadius: 5,
            marginTop:'50%',
            backgroundColor: 'orange',
            height: 30, width: 100,
            justifyContent: 'center',
            alignItems: 'center'
          }}
         ></TouchableOpacity>
        
          <Text style={{ color: 'white', textAlign: 'center'}}>Login now</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  animationView:{
height:100,
marginTop:-100,
justifyContent:'center',
alignItems:'center',
width:'100%',
backgroundColor:'red'
  }
});
