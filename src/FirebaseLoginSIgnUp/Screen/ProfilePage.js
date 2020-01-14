import React, { PureComponent } from 'react';
import {  View, Text,StyleSheet,Image,ImageBackground,TouchableOpacity } from 'react-native';
import ScreenLabel from './screenProfileComponent'
import Icon from 'react-native-vector-icons/Entypo'
import ImagePicker from 'react-native-image-crop-picker';
import firebase from 'react-native-firebase'


export default class ProfilePic extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      imagePath:''
    };
  }
 
  GetPicFromGallery=()=>{
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
     this.setState({
       imagePath:image.path
     },()=>{console.warn("call")})
    });
  }

   
  render() {
    return (
      <View style={{flex:1}}>
      <View style={styles.imagePLaceholder}>
        <Image style={styles.imagecircle} source={{uri:this.state.imagePath}} />
        <TouchableOpacity style={{height:40,width:40,backgroundColor:'yellow',borderRadius:20,position:'absolute',bottom:50,right:140}}onPress={this.GetPicFromGallery} >
        <ImageBackground style={{height:40,width:40,justifyContent:'center',alignItems:'center'}}>
        <Icon name="camera" size={20}/>
        
          </ImageBackground>
          </TouchableOpacity>
      </View>
      <ScreenLabel iconname="phone" username="+91-9958431869"/>
      <ScreenLabel iconname="user" username="nitish kumar"/>
      <ScreenLabel iconname="home" username="+91-9958431869"/>
      <ScreenLabel iconname="mail" username="nk899245@gmail.com"/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  imagePLaceholder:{
    height:300,
    width:'100%',
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'green'
  },imagecircle:{
    height:200,
    width:200,
    borderRadius:100,
    backgroundColor:'red'
  }
  
});
