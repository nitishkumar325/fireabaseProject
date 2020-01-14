import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput, Button,
    Alert, FlatList
} from 'react-native'
import GalleryItem from './GalleryItem'
export default GalleryChildOrange = () => {
    return (
        <View style={styles.GalleryChildOrange}>
            <GalleryItem value={"1st"}/>
            <GalleryItem value={"2nd"}/>
            <GalleryItem value={"3rd"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    GalleryChildOrange: {
        height: 190,
        width: '90%',
        padding:20,flexDirection:'row',justifyContent:'space-between',
        borderRadius: 5,backgroundColor:'#ffeed3'
    }

});