import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground, KeyboardAvoidingView } from 'react-native';
import AsyncStorage from '../utils/AsynsStorage'

export default class LoginScreen extends React.Component {
    myRef = React.createRef();

    constructor(props) {
        super(props);
        this.state = {
            name: "", age: "", address: "", hobbies: "", employeeId: "", phoneno: ""
        };
    }

    goToDashboard = () => {
        this.props.navigation.navigate('LoginDashboard')
        var obj = {
            name: this.state.name,
            age: this.state.age,
            address: this.state.address,
            hobbies: this.state.hobbies,
            employeeId: this.state.employeeId,
            phoneno: this.state.phoneno

        }
        AsyncStorage.setdata("userlogindata", JSON.stringify(obj))
    }

    render() {
        return (
            <KeyboardAvoidingView style={{ height: '100%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', flex: 1, borderColor: '#011423', borderWidth: 2 }}>
                < ImageBackground source={require('./images/wallpaper.png')} style={{ height: '100%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', flex: 1, borderColor: '#011423', borderWidth: 2 }}>
                    <View style={{ height: '100%', width: '100%', justifyContent: 'flex-start', alignItems: 'center', flex: 1, marginTop: '30%' }}>
                        <TextInput onSubmitEditing={() => this.myRef.current.focus()}
                            style={styles.TextInputStyle} placeholder="Enter Your Name" placeholderTextColor="white" onChangeText={(val) => {
                                this.setState({
                                    name: val
                                })
                            }} />
                        <TextInput keyboardType="numeric" ref={this.myRef} onSubmitEditing={() => { this.emailaddress.focus() }}
                            style={styles.TextInputStyle} placeholder="Enter Your Age" placeholderTextColor="white" onChangeText={(val) => {
                                this.setState({
                                    age: val
                                })
                            }} />
                        <TextInput ref={(ref) => { this.emailaddress = ref }} onSubmitEditing={() => { this.hobbies.focus() }}
                            style={styles.TextInputStyle} placeholder="Enter Your Email Address" placeholderTextColor="white" onChangeText={(val) => {
                                this.setState({
                                    address: val
                                })
                            }} />
                        <TextInput ref={(ref) => { this.hobbies = ref }} onSubmitEditing={() => { this.employeeId.focus() }}
                            style={styles.TextInputStyle} placeholder="Enter Your Hobbies" placeholderTextColor="white" onChangeText={(val) => {
                                this.setState({
                                    hobbies: val
                                })
                            }} />
                        <TextInput ref={(ref) => { this.employeeId = ref }} onSubmitEditing={() => { this.phoneno.focus() }}
                            style={styles.TextInputStyle} placeholder="Enter Your Employee Id" placeholderTextColor="white" onChangeText={(val) => {
                                this.setState({
                                    employeeId: val
                                })
                            }} />
                        <TextInput ref={(ref) => { this.phoneno = ref }} returnKeyType="done" maxLength={10}

                            style={styles.TextInputStyle} returnKeyType="done" onSubmitEditing={() => {
                                this.goToDashboard()

                            }}
                            placeholder="Enter Your Phoneno " keyboardType="numeric" placeholderTextColor="white" onChangeText={(val) => {
                                this.setState({ phoneno: val })
                            }} />
                        <TouchableOpacity style={styles.buttonStyle} onPress={this.goToDashboard}>
                            <Text>Go To Dashboard</Text>
                        </TouchableOpacity>
                    </View>

                </ImageBackground>
            </KeyboardAvoidingView>
        );
    }
}
const styles = StyleSheet.create({
    container: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        height: '100%', width: '100%'
    },
    buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        marginTop: 20,
        width: 150,
        borderColor: 'black', borderWidth: 1, borderRadius: 5
    }, TextInputStyle: {
        padding: 5,
        margin: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        borderColor: 'blue',
        borderWidth: 1,
        height: 40,
        width: '60%',
        borderColor: 'white',

        backgroundColor: '#045698'
    }, buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        marginTop: 20,
        width: 150,
        borderColor: 'black', borderWidth: 1, borderRadius: 5
    }, buttonStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        marginTop: 20,
        width: 150,
        borderColor: 'black', borderWidth: 1, borderRadius: 5
    }
})
