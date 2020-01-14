import React, { PureComponent } from 'react';
import {  View, Text ,StyleSheet} from 'react-native';
import { db } from '../config';
import firebase from 'react-native-firebase'
import { TextInput, TouchableOpacity } from 'react-native-gesture-handler';

export default class SignUpScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname:'',lastname:'',
      email:'',Password:''

    };
    
  }
setMyState(key,value)
{
  this.setState({
    [key]:value
  })
}
handleSubmit = () => {
  console.warn("method called")
  var key=db.ref('/items').push({
    name: "nitish G"
  },(val)=>{
    console.warn("val",val)
    if(val===null)
    {
      console.warn("sucess")
    }
  }).key;
}
setNewUserToFireBase=(id)=>{
  db.ref('/Users').push({
    name: this.state.firstname+this.state.lastname,
    email:this.state.email,
    password:this.state.password,
    id:id
  },(val)=>{
    console.warn("val",val)
    if(val===null)
    {
      this.props.navigation.navigate('FirebaseLoginScreen')
      console.warn("sucess")
    }
  });
}
handleSignUp = () => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.email, this.state.password).then((res)=>{this.setNewUserToFireBase(res.user.uid)})
    .catch(error =>console.warn("error=>",error))
}
  setEmail=(val)=>{
this.setMyState("email",val)
  }
  setpassword=(val)=>{
    this.setMyState("password",val)
      }
  setFirstName=(val)=>{
        this.setMyState("firstname",val)
          }

  setLastName=(val)=>{
     this.setMyState("lastname",val)
          }

          
  render() {
    return (
      <View style={styles.parent}>
        <View style={styles.child}>
        <View style={{...styles.detailFormLayout,backgroundColor:'white',flex:0.7}}>
          <View style={styles.TextInputLayout}>
          <TextInput placeholder="First Name"  onChangeText={this.setFirstName}
          style={{...styles.TextInput,flex:1,padding:10,margin:2}}/>
          <TextInput placeholder="Last Name" onChangeText={this.setLastName}
           style={{...styles.TextInput,flex:1,padding:10,margin:2}}/>
          </View>
          <TextInput placeholder="Email Or Phone No" style={{...styles.TextInput,padding:10,marginHorizontal:30,marginBottom:20}} onChangeText={this.setEmail}/>
          <TextInput placeholder="Re-Enter email or mobile no" style={{...styles.TextInput,padding:10,marginHorizontal:30,marginBottom:20}}/>
          <TextInput placeholder="New Password" style={{...styles.TextInput,padding:10,marginHorizontal:30,marginBottom:20}} onChangeText={this.setpassword}/>

        <TouchableOpacity style={{backgroundColor:'red',borderRadius:10,padding:10,marginHorizontal:20,alignItems:'center',}} onPress={this.handleSignUp   }>
          <Text style={{fontSize:20,color:'white'}}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={{...styles.detailFormLayout,backgroundColor:'tranparent',flex:0.3}}/>
        
        </View>
   
      </View>
    );
  }
}
const styles = StyleSheet.create({
  parent:{
    flex:1,
    backgroundColor:'black'
  },child:{
    flex:1,
    backgroundColor:'yellow',
    justifyContent:'space-evenly',
    marginTop:'20%', 
    borderRadius:40,
    marginHorizontal:'2%'
  },detailFormLayout:{
 
  borderRadius:40
  },textProperty:{
    padding:10,borderColor:'black',borderWidth:1,flex:1
  },firstrow:{
    flexDirection:'row',
    backgroundColor:'red',
    justifyContent:'space-between'
  },TextInputLayout:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginHorizontal:10
    ,padding:20
  },
  TextInput:{
   borderColor:'black',
    borderWidth:1,
  },TextCommonStyle:{
    padding:10,marginHorizontal:10
  }
});