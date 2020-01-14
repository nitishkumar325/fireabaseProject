import React, { Component } from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput, Button,
    Alert, FlatList
} from 'react-native'
Userchat = (props) => {
   
    return (
        <View style={styles.parent}>
            {props.userdata.Source!==props.Source?
            <View style={{ ...styles.leftmsg, backgroundColor: 'green', }}>
            <Text>{props.userdata.messgae}</Text>
            </View>:
            <View style={{ ...styles.leftmsg, backgroundColor: 'yellow', marginLeft:200,borderBottomRightRadius:30 }}>
                <Text>{props.userdata.messgae}</Text>
            </View>}

        </View>)

}
const styles = StyleSheet.create({
    parent: {
        width: '100%',
        justifyContent: 'center',
        paddingVertical: 10,

        backgroundColor: 'blue'
    }, leftmsg: {

        width: '50%',
        borderRadius: 10, padding: 10


    }

});
export default Userchat;