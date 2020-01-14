import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
    TextInput, Button,
    Alert, FlatList
} from 'react-native'
import GallerySmallItem from './GallerySmallItem'

export default GalleryItem = (props) => {
    return (
        <View style={styles.GalleryItem}>
            {/* <Image source={require('./lion.jpeg')} style={{ width: 100, height: 110, borderRadius: 5, borderWidth: 0.5, borderColor: '#ddd' }} /> */}
            <GallerySmallItem value={props.value} />
        </View>
    );
}

const styles = StyleSheet.create({
    GalleryItem: {
        height: 110,
        width: 100,
        justifyContent: 'center', alignItems: 'center',
        borderRadius: 10, backgroundColor: 'red'
    }

});