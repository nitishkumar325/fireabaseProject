import React, { Component } from 'react';
import {
    StyleSheet,
Text,
    View,
Image
} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
export default UserMemberChatList=(props)=>{
    console.warn("value",props.userdata.id)
return(
    <TouchableOpacity  onPress={()=>props.onRowPress(props.userdata.id)} style={styles.parent}>
        <Image style={styles.circleImage}/>
        <View style={styles.ContentImage}>
<Text  style={styles.Textstyle}>{props.userdata.name}</Text>
<Text style={{color:'#8E8D8D'}}>hello How Are You.....</Text>


        </View>





    </TouchableOpacity>
)
}
const styles = StyleSheet.create({
    parent:{
        height:70,
        width:'100%',
        flexDirection:'row',
        paddingHorizontal: 10,
        borderWidth:0.7,
        borderColor:'#ddd'
        
    },circleImage:{
        width:60,
        height:60,
        backgroundColor:'red',
        borderRadius: 30,
    },ContentImage:{
    flex:1,padding: 10,
    },Textstyle:{
        fontWeight:'bold',fontSize:16
    }
});