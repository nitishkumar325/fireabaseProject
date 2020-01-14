import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput, Button,
    Alert, FlatList
} from 'react-native'
import GalleryChildOrange from './GalleryChildOrange'
import GalleryBottomBanner from './GalleryBottomBanner'

export default GalleryParent = () => {
    return (
        <View style={styles.GalleyParent}>
            <GalleryChildOrange />
            <GalleryBottomBanner/>
        </View>
    );
}

const styles = StyleSheet.create({
    GalleyParent: {
        height: 250,
        width: '100%',
        justifyContent:'flex-start',
        alignItems:'center'
    }
});