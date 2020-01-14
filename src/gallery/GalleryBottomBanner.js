import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Image,
    ImageBackground,
    TextInput, Button,
    Alert, FlatList
} from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'

export default GalleryChildBanners = () => {
    return (
        <View style={styles.GalleryChildBanners}>
            {/* style={{
                width: '75%', height: 90, resizeMode: 'stretch'
            }}  */}
            <ImageBackground source={require('./images/GalleryBottomBanner.png')} style={{ width: '90%', height: 90, resizeMode: 'stretch', marginLeft: '8%' }} >
                {
                    <View style={{ justifyContent: 'center', marginTop: '3%', marginLeft: '10%' }}>
                        <Text style={{ fontWeight: 'bold', color: '#141414' }}> Jungle Suffari
          </Text>
                        <View style={{ flexDirection: 'row', marginTop: '1%' }}>
                            <Icon name="clockcircleo" size={15} style={{ color: '#c5c5c5' }} />
                            <Text style={{ fontWeight: 'bold', fontSize: 10, color: '#c5c5c5' }}> 1-june 2008 -  20th june 2019
          </Text>
                        </View>
                    </View>}

            </ImageBackground>

        </View>
    );
}

const styles = StyleSheet.create({
    GalleryChildBanners: {
        height: 120,
        width: "100%",
        position: 'absolute',
        bottom: 0,
        zIndex: 10,
        alignItems: "center",

        marginBottom: -25,

    }, textBody: {
        width: 100,
        height: 50,
        position: 'absolute',
        backgroundColor: 'red'

    }

});