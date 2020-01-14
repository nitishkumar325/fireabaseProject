import React, { Component } from 'react';
import {PressButton } from '../Action/Action'
import {connect} from 'react-redux'
import {
    Button,
    Text,
    View,
} from 'react-native'
 Child=(props)=>{ 
    console.warn("render call child")
    return(
        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
    <Button title="Increment" onPress={props.incrementNumber}/>          
    <Text>Vlaue=>{props.count}</Text>
    <Button title="Decrement" onPress={props.decrementNumber}/>
        </View>
    )
}
const mapStateToProps=State=>{
    return{
        count:State.Count
        }
    }
    const mapDispatchToProps=dispatch=>{
        return{
            incrementNumber:()=>dispatch(PressButton("increment")),
            decrementNumber:()=>dispatch(PressButton("decrement")),
            
        }
    }
 

export default connect(mapStateToProps,mapDispatchToProps)(Child);