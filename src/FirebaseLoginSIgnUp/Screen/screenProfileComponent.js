import React, { Component } from 'react';
import {View,StyleSheet,Text} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'
Label=(props)=>{
    return(

        <View style={styles.parent} >
        <Icon name={props.iconname} size={25} color="green"/> 
            <Text style={styles.textStyle}>{props.username}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    parent:{
        height:70,
        width:'100%',
        flexDirection:'row',
        backgroundColor:'#ddd',
        borderWidth:0.5,
        padding:10,
        alignItems:'center',
        borderColor:'black',
    },textStyle:{
        marginLeft:20,
        fontSize:14,
        fontWeight:'bold'
    }
});
export default Label