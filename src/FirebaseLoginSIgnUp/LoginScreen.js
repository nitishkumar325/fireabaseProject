import React from 'react'
import { connect } from 'react-redux'
import { saveFireUid } from '../Redux Example/Action/Action';
import MyStorage from './Storage/FireBaseLocalStorage'
import { StyleSheet, Text, TextInput, View, Button } from 'react-native'
import firebase from 'react-native-firebase'
export  class LoginScreen extends React.Component {
  state = { email: '', password: '', errorMessage: null }
  handleLogin = () => {
    console.warn(this.state.email,this.state.password)
    firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password).
    then(res=>{this.props.addFirebaseUid(res.user.uid)
      MyStorage.setvalue("useruid",res.user.uid)
      this.props.navigation.navigate('ChatList')
     })
    .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        console.warn(error.message)
      });
  }
  setMyState=(key,value)=>{
    this.setState({
      [key]:value
    })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Login</Text>
        {this.state.errorMessage &&
          <Text style={{ color: 'red' }}>
            {this.state.errorMessage}
          </Text>}
        <TextInput
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Email"
          onChangeText={email =>{this.setMyState("email",email)} }
          value={this.state.email}
        />
        <TextInput
          secureTextEntry
          style={styles.textInput}
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={password => {this.setMyState("password",password)}}
          value={this.state.password}
        />
        <Button title="Login" onPress={this.handleLogin} />
        <Button
          title="Don't have an account? Sign Up"
          onPress={() => this.props.navigation.navigate('FirebaseSignUpScreen')}
        />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    width: '90%',
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 8
  }
})
const mapStateToProps = state => {
  console.warn("run TIme=>",state.saveFireBaseUid.loginUid)
  return {
    FirebaseUseruid: state.saveFireBaseUid.loginUid
  }
}
const mapDispatchToProps = dispatch => ({

  addFirebaseUid: (payload) => dispatch(saveFireUid(payload)),

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginScreen);