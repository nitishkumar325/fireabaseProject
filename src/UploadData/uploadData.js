import React, { PureComponent } from 'react';
import {  View, Text ,Button,Image,TouchableOpacity} from 'react-native';
import * as Progress from 'react-native-progress';
import Uploadimage from '../utils/UploadImage';
//import {Toast} from 'react-native'
import Toast, {DURATION} from 'react-native-easy-toast'
import {ART} from 'react-native';
import {Surface, Shape} from '@react-native-community/art';

export default class uploadData extends React.Component {
    
  constructor(props) {
    super(props);
    this.state = {
        images:"",
        clicked:false,
        progress:false,
        uploading : 0.0
    };
  }

  
  handleImageChnage=()=>{
    console.warn("open")
    Uploadimage.getImageFromGallery((error)=>{alert("error")},
      
      (image)=>{
      this.setState({
        images:image
      })
    })
  };
  uploadDataToServer=()=>{
      this.setState({
          progress:true
      })
      if(this.state.images!="")
      Uploadimage.uploadPicToServer(this.state.images , (value)=>{this.setState({uploading:value})} , (value,value2)=>{this.setState({ progress:value,uploading:value2})});
      else
      alert("please select any image")
    }
    toastShow=()=>{
      console.warn("toast")
      this.toastrefrence.show("hello")
      
    }

  changeStateofProgress = (percentange) => {
      this.setState({
          progress:true
      })
  }
changeState=()=>{

    this.setState({
        clicked:true
    })
}
  render() {
      
    return (
      <View style={{marginTop:'30%', alignItems:'center',flex:1}}>
        <Toast ref={(ref)=>{this.toastrefrence=ref}}/>
          <Image  source={{uri:this.state.images}} style={{height:200,width:'50%',backgroundColor:'red',borderRadius:200,shadowOpacity:5}}/>
          <View style={{flexDirection:'row',width:'80%',justifyContent:'space-evenly',margin:5,justifyContent:'center',alignItems:'center'}}>
            <TouchableOpacity style={{flex:1,padding:10,backgroundColor:'yellow',margin:2,borderRadius:5,borderColor:'red',borderWidth:1,alignItems:'center'}} onPress={this.handleImageChnage}>
          <Text title="get pic" >
            Get Pic
          </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{flex:1,padding:10,justifyContent:'center',alignItems:'center',backgroundColor:'yellow',margin:2,borderRadius:5,borderWidth:1,borderColor:'red',alignItems:'center'}}  onPress={this.uploadDataToServer}> 
        <Text title="upload">
          Upload</Text>  
          </TouchableOpacity>
       </View>
       {
              (this.state.progress&&this.state.images!="") ? <Progress.Bar progress={this.state.uploading} width={200} />: false
          }
          {
            // (this.state.uploading>=1)?Toast.show('This is a toast.'):null
          }
      </View>
    );
  }
}
