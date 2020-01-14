import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,Button,
  Alert,FlatList
} from 'react-native'
export default GalleryHeaderBarComponent=(props)=>{
    console.warn(props)
    return(
<View style={styles.HeaderBar}>


    <Text style={{fontWeight:'bold',fontSize:16}}>
{props.month}
    </Text>
    <Text>
{props.chall}
    </Text>
</View>

    );

}
const styles = StyleSheet.create({


    HeaderBar:{
        flexDirection:'row',justifyContent:'space-between',alignItems:'center',padding:20,width:'100%'
    }

});