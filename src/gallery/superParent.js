import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput, Button,
    Alert, FlatList
} from 'react-native'
import HeaderBar from './GalleryHeaderBar'
import GalleryParent from './GalleryParent'

export default SuperParent = (props) => {
    console.warn("incoming props_here", props.duration);
    return (
        <View >
            <HeaderBar month={props.month} chall={props.chall} />
            <GalleryParent />
            <GalleryParent />
        </View>

    );

}
const styles = StyleSheet.create({


    SuperParent: {
        flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', padding: 20, width: '100%'
    }

});