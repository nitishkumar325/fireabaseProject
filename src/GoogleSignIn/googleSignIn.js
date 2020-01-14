import React, { PureComponent } from 'react';
import { View, Text, Button, Image } from 'react-native';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';
import { statusCodes } from '@react-native-community/google-signin';

export default class googleSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "", photo: "", name: "", show: false
    };
  }

  signOut = async () => {
    try {
      await GoogleSignin.revokeAccess();
      await GoogleSignin.signOut();
      this.setState({ show: false }); // Remember to remove the user from your app's state as well
    } catch (error) {
      console.error(error);
    }
  };
  
  signIn = async () => {
    GoogleSignin.configure();
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.warn("userinfo", userInfo.user.email)
      this.setState({ email: userInfo.user.email, name: userInfo.user.name, photo: userInfo.user.photo, show: true });
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

  loginInfo = () => {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }
      }>
        <Image style={{ height: 50, width: 50, backgroundColor: 'red ' }} source={{ uri: this.state.photo }} />
        <Text>User:{this.state.name}</Text>
        <Text>User email id:{this.state.email}</Text>
        <Text>Current User:{this.state.email}</Text>
        <Button title="Log Out" onPress={this.signOut} />
      </View >
    );
  }

  googleSign = () => {
    return (
      <GoogleSigninButton
        style={{ width: 192, height: 48 }}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={this.signIn}
        disabled={this.state.isSigninInProgress} />
    );
  }
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
        {this.state.show ? this.LoginInfo : this.googleSign()}
      </View>
    );
  }
}
