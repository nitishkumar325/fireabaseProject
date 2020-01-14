import React, { PureComponent } from 'react';
import {  View, Text,StyleSheet,TouchableOpacity,Image,TextInput,ImageBackground } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import AsyncStorage1 from '@react-native-community/async-storage';
import { GoogleSignin, GoogleSigninButton } from '@react-native-community/google-signin';

export default class LoginDashboard extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
        alldata:"",
        name:"",
        address:"",
        age:"",
        hobbies:"",
        employeeid:"",
        phoneno:""
    };
  }
  goToDashboard=()=>{

    AsyncStorage1.getItem("userEmail",(error,result)=>{
      console.warn("getting result=>",result)      
          let con=JSON.parse(result).googleSignIn
          if(con)
          {
            console.warn("if invoked")
            {this.signOut()}
          }
          else{
            AsyncStorage.clear()
            this.props.navigation.navigate('SignUpScreen')
          }

  })
   
}
signOut = async () => {
  console.warn("sign out invoked")
  try {
    await GoogleSignin.revokeAccess();
    await GoogleSignin.signOut();
    this.props.navigation.navigate('SignUpScreen')// Remember to remove the user from your app's state as well
  } catch (error) {
    console.error(error);
  }
};


  componentDidMount()
  {
    AsyncStorage.getItem("userlogindata",(error,result)=>{
        console.warn("getting result=>",result)
        this.setState({
            alldata:result,
            name:JSON.parse(result).name,
            address:JSON.parse(result).address,
            age:JSON.parse(result).age,
            hobbies:JSON.parse(result).hobbies,
            employeeid:JSON.parse(result).employeeid,
            phoneno:JSON.parse(result).phoneno
        })
        
    })   
  }
//   removeValue = async () => {
//    AsyncStorage.clear()
//    this.props.navigation.navigate('LoginScreen')
//   }
  render() {
    return (
      <View style ={{flex:1}}>
        {/* <Text style={{justifyContent:'center'}}>{this.state.email} </Text>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.removeValue}>
             <Text>Clear</Text>
         </TouchableOpacity> */}
        <View style={{flex:1}}>
         <ImageBackground style={{ flex:0.4, backgroundColor:'red',justifyContent:'center',alignItems:'center'}}/>
    

         <View  source style={{flex:1,paddingTop:'10%',justifyContent:'center',alignItems:'center'}}>
        <View style={{width:'100%',height:'100%',justifyContent:'center',alignItems:'center'}}>
         <Text style={{fontSize:35,fontWeight: 'bold',}}>{this.state.name}</Text>
         <Text style={{fontSize:13,fontWeight: 'bold',}}>Working At Appinventiv</Text>
         <Text style={{fontSize:13,fontWeight: 'bold',marginTop:'1%'}}>Emp ID:{this.state.employeeid}</Text>
         <Text style={{fontSize:13,fontWeight: 'bold',marginTop:'1%'}}>Age:{this.state.age}</Text>
         <Text style={{fontSize:13,fontWeight: 'bold',marginTop:'1%'}}>========================================</Text>
         <Text style={{fontSize:13,fontWeight: 'bold',marginTop:'1%'}}>Personal Detail</Text>
         <View style={{flexDirection:'row',padding:15,width:'90%',marginTop:'3%',justifyContent:'space-between'}}>
            <Text style={{fontSize:13,fontWeight: 'bold'}}>Mobile</Text>
            <Text style={{fontSize:13,fontWeight: 'bold'}}>{this.state.phoneno}</Text>
         </View>
         <View style={{flexDirection:'row',padding:15,width:'90%',marginTop:'3%',justifyContent:'space-between'}}>
            <Text style={{fontSize:13,fontWeight: 'bold'}}>Email Id</Text>
            <Text style={{fontSize:13,fontWeight: 'bold'}}>{this.state.address}</Text>
         </View>
         <View style={{flexDirection:'row',padding:15,width:'90%',marginTop:'3%',justifyContent:'space-between'}}>
            <Text style={{fontSize:13,fontWeight: 'bold'}}>Home</Text>
            <Text style={{fontSize:13,fontWeight: 'bold'}}>01206577120</Text>
         </View>
         <View style={{flexDirection:'row',padding:15,width:'90%',marginTop:'3%',justifyContent:'space-between'}}>
            <Text style={{fontSize:13,fontWeight: 'bold'}}>Hobbies</Text>
            <Text style={{fontSize:13,fontWeight: 'bold'}}>{this.state.hobbies}</Text>
         </View>
         </View>
         <TouchableOpacity style={styles.buttonStyle} onPress={this.goToDashboard}>
             <Text>Sign-Out</Text>
         </TouchableOpacity>


         </View>
         </View>
         <Image source={require('./images/wallpaper.png')} style={{position:'absolute',top:0, marginTop:'35%', height:100,width:110,borderRadius:100,marginLeft:'30%'}}/>
      </View>
    );
  }
}
const styles = StyleSheet.create ({
    container: {
       
       justifyContent: 'center',
       alignItems: 'center',
       backgroundColor: 'white',
       height: '100%',width:'100%'
    },
    buttonStyle:{
        justifyContent:'center',
        alignItems:'center',
        height:30,
        width:150,
        borderColor:'black',borderWidth:1,borderRadius:5
    },TextInputStyle:{
        padding:5,
        margin:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        borderColor:'blue',
        borderWidth:1,
        height:40,
        width:'60%',
        borderColor:'white',
        
       
    }
})
