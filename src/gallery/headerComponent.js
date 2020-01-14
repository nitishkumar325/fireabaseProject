import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput, Button,
    Alert, FlatList, Image
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
export default HeaderComponent = () => {
    return (
        <View style={style.header} >
            <View style={style.body}>
                <Icon name="md-arrow-back" size={25} style={style.imageProperty} />
                <Text style={style.imagePropertymiddle}>
                    GALLERY
                </Text>
                <View style={style.imageProperty3} >
                    <View style={style.box}>
                        <View style={style.circle}>
                        </View>
                        <Text style={style.TEXTFONT}>
                            45 COINS
                        </Text>
                        
                        
                    </View>
                </View>
            </View>
        </View>
    )



}
const style = StyleSheet.create(
    {

        header: {

            width: '100%',
        
            height: 50, backgroundColor: 'orange', justifyContent: 'flex-end', alignContent: 'center'

        }, imageProperty: {
            height: 50, width: '30%',justifyContent:'center',alignItems:'center',padding:5,paddingLeft:20,paddingTop:13,color:'white'
        },
        imageProperty3: {
            height: 50, width: '30%',justifyContent:'center',alignItems:'center'
        },
        imagePropertymiddle: {
            paddingTop:15,paddingHorizontal:20,paddingLeft:10,paddingLeft:30,
            height: 50, width: '40%',flexDirection:'row',fontSize:16,color:'white',fontWeight:'bold'
        }, body: {
            width: '100%', height: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'
        },box:{
            width:'80%',height:35,backgroundColor:'white',borderRadius:10,flexDirection:'row',alignItems:'center',
        },circle:{
            width:20,height:20,backgroundColor:'yellow',borderRadius:10,marginLeft:5,borderWidth:1,borderColor:'red'
        },TEXTFONT:{
            fontSize:10,fontWeight:'bold',color:'black',marginLeft:8
        }



    }
)