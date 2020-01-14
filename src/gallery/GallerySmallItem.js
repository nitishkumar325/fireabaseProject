import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput, Button,
    Alert, FlatList
} from 'react-native'
import Icon1 from 'react-native-vector-icons/FontAwesome5';
export default GalleryItem = (props) => {
    return (
        <View style={styles.GallerySmallItem}>
            <Icon1 name="award" color="red" size={16}/>
            <Text style={{fontSize:14}} > {props.value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    GallerySmallItem: {
        height: 30,
        width: 60,
        marginRight:5,
        position: 'absolute',
        padding:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        bottom:0,marginBottom:-10,
        borderRadius: 5,backgroundColor:'white'
    }

});