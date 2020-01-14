import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
    TextInput, Button,
    Alert, FlatList
} from 'react-native'
export default CircleComponent=(props)=>{
    console.warn(props.path)
    return(
        
<Image source={{uri:props.path}} style={styles.circle}/>
  







    )
}
const styles = StyleSheet.create({
    circle:{
        height:200,
        width:'50%',
        backgroundColor:'red',borderRadius:100,borderWidth:1,borderColor:'black'
    }
    
});