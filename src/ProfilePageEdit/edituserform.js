import React, { PureComponent } from 'react';
import {  View, Text,Button,TextInput ,TouchableOpacity,Toast} from 'react-native';
import CircleComponent from './circleComponent'
import ImagePicker from 'react-native-image-crop-picker';

class EditForm extends React.Component {

  constructor(props) {
    super(props);
    const{name,address,phoneno}=props.navigation.state.params
    this.state = {
        firstname:name,
        address:address,
        userimage:'',
        phoneno:phoneno
    };
  }
  handleImageChnage=()=>{
    console.warn("handle image")
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true
    }).then(image => {
      alert(image.path)
      this.setState({
        userimage:image.path
  
      })
    });
  };
  static navigationOptions = ({ navigation }) => {
    // const {state, setParams} = navigation;

    return {
      title: 'Form Page',
      headerRight: (
        <View style={{flexDirection:'row'}}>
       
         {/* <Button
          title='Next'
          // onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
           onPress={() => navigation.navigate('Gallery')
           }
        /> */}
        </View>
        
      ),
    };
  };
componentDidMount()
{
    console.warn(this.props)
}
  updateEditRecord(){
      console.warn("update");
      console.warn(this.props);
      this.props.navigation.state.params.funref(this.state.firstname,this.state.address,this.state.phoneno);
      this.props.navigation.goBack();
  }
  render() {
      const {name,password, update} = this.props.navigation.state.params;
    return (
      <View style={{alignItems:'center',marginTop:'30%'}}>
                <CircleComponent  path={this.state.userimage}/>
  
         <TextInput 
         ref={(val)=>this.text1=val}
         onSubmitEditing={()=>this.text2.focus()}
         placeholder="Enter Your Name" style={{borderColor:'red',padding:10, borderWidth:1,width:'80%',margin:10}} value={this.state.firstname} onChangeText={(value)=>{
             this.setState({
                 firstname:value
             })
         }} />
         <TextInput
         onSubmitEditing={()=>this.text3.focus()}
         ref={(val)=>this.text2=val}
           value={this.state.address} placeholder="Enter Your Address" style={{borderColor:'red',padding:10, borderWidth:1,width:'80%',margin:10}}   onChangeText={(value1)=>{
             this.setState({
                address:value1
            })
         }}/>

           <TextInput 
           ref={(val)=>this.text3=val}
           returnKeyType="done"
            value ={this.state.phoneno} placeholder="Enter Your Phone" style={{borderColor:'red',padding:10, borderWidth:1,width:'80%',margin:10}}   onChangeText={(value1)=>{
             this.setState({
                phoneno:value1
            })
         }}/>
                <TouchableOpacity style={{width:'80%',borderWidth:1,borderColor:'red',alignItems:'center',padding:10,backgroundColor:'green',margin:10}} onPress={()=>{
          update(this.state.firstname,this.state.address,this.state.phoneno);
            this.props.navigation.goBack();

                }}>
                  
<Text>Submit</Text>
       </TouchableOpacity>
       <TouchableOpacity style={{width:'80%',borderWidth:1,borderColor:'red',alignItems:'center',padding:10,backgroundColor:'green',margin:10}} onPress={
       this.handleImageChnage

                }>
                  
<Text>Change Image</Text>
       </TouchableOpacity>
      </View>
    );
  }
}

export default EditForm;
