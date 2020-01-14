import React, { Component } from 'react'
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput, Button,
    Alert, FlatList, Image
} from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/Ionicons';

export default BottomNavigationComponent = () => {
    return (
        <View style={style.headerbody}>
            <Icon style={style.iconproperty} name="home" size={25}  ></Icon>
            <Icon1 style={style.iconproperty} name="search1" size={25}></Icon1>
            <Icon style={style.iconproperty} name="user" size={25}></Icon>
            <Icon2 style={style.iconproperty} name="bell" size={25}> </Icon2>
            <Icon3 style={style.iconproperty} name="md-settings" size={25}></Icon3>
        </View>
    );
}

const style = StyleSheet.create({
    headerbody: {
        alignSelf:"flex-end",
        width: '100%',
        height: 50,
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        backgroundColor: 'white'

    }, iconproperty: {
        width: 50,
        height: 50,
        justifyContent: 'center', alignItems: 'center', padding: 13,
    }

})