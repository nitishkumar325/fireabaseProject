import React, { PureComponent } from 'react';
import { View, Text, SafeAreaView, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import AsyncStorage from '../utils/AsynsStorage'
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import { statusCodes } from '@react-native-community/google-signin';
import Validation from '../utils/CommonMethod'
//import AsyncStorage from '@react-native-community/async-storage';

export default class SignUpScreen extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      Email: ''
    };
  }

  signIn = async () => {
    GoogleSignin.configure();
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.warn("userinfo", userInfo.user.Email)
      var Obj = { "userEmail": userInfo.user.email, "googleSignIn": true }
      AsyncStorage.setdata("userEmail", JSON.stringify(Obj))
      this.props.navigation.navigate('DashBoardEmail')
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
      } else {
        // some other error happened
      }
    }
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <View style = {styles.redbox} /> */}
        <TextInput
          style={styles.TextInputStyle}
          value={this.state.Email}
          placeholder="Enter Your Email Address"
          onChangeText={(val) => { this.setState({ Email: val }) }}
          onSubmitEditing={() => { }}
        />
        <TouchableOpacity style={styles.buttonStyle} onPress={() => {
          if (Validation.checkProperEmail(this.state.Email)) {
            var Obj = { "userEmail": this.state.Email, "googleSignIn": false }
            AsyncStorage.setdata("userEmail", JSON.stringify(Obj))
            this.setState({ Email: '' })
            this.props.navigation.navigate('DashBoardEmail')
          } else { alert("please enter proper email ") }
        }}
        >
          <Text>Go To Dashboard</Text>
        </TouchableOpacity>
        <GoogleSigninButton
          style={{ width: 192, height: 48, borderRadius: 20, marginTop: 10 }}
          size={GoogleSigninButton.Size.Wide}
          color={GoogleSigninButton.Color.Dark}
          onPress={this.signIn}
          disabled={this.state.isSigninInProgress}
        />
      </View>
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
    height: 48,
    marginTop: 20,
    width: 192,
    borderColor: 'black', borderWidth: 1, borderRadius: 5
  },
  TextInputStyle: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 1,
    height: 50,
    width: 200,
    backgroundColor: '#ddd'
  },
  redbox: {
    width: 100,
    height: 100,
    backgroundColor: 'red'
  },
  bluebox: {
    width: 100,
    height: 100,
    backgroundColor: 'blue'
  },
  blackbox: {
    width: 100,
    height: 100,
    backgroundColor: 'black'
  },
})
