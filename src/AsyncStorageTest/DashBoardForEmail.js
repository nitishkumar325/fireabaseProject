import React, { PureComponent } from 'react';
import {  View, Text,StyleSheet,TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

export default class DashBoardForEmail extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        email:''
    };
  }
  componentDidMount()
  {
    AsyncStorage.getItem("userEmail",(error,result)=>{
        console.warn("getting result=>",result)

        this.setState({
            email:JSON.parse(result).userEmail
        })
        
    })   
  }
  removeValue = async () => {
   this.setState({
     email:""
   },()=>{
    this.props.navigation.navigate('LoginScreen')

   })
  }
  render() {
    return (
      <View style ={{height:'100%',width:'100%',justifyContent:'center',alignItems:'center'}}>
        <Text style={{justifyContent:'center'}}>{this.state.email} </Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.removeValue}>
             <Text>Clear</Text>
         </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
    container: {
       
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'white',
       height: '100%',width:'100%'
    },
    buttonStyle:{
        justifyContent:'center',
        alignItems:'center',
        height:30,
        marginTop:20,
        width:150,
        borderColor:'black',borderWidth:1,borderRadius:5
    },
})
