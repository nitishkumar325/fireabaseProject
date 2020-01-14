import React, { PureComponent } from 'react';
import {  View, Text,Button ,TouchableOpacity,StyleSheet} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import CircleView from './circleComponent'
import Icon1 from 'react-native-vector-icons/Entypo';

class form1 extends React.Component {

  constructor(props) {
    super(props);
  //console.warn(props.navigation.state)
  
 this.state = { 
   firstname:'nitish ',
   lastname:'kumar',
   address:'xyz',
   phoneno:'993928402',
   userImage:'./images/hrithik_roshan.jpg'
  
    }
  //const{userName,LastName}=this.props.navigation.state.params;
  }

  changeIdPassword=(firstname1,lastname1,phoneno,userImage)=>
  {
    console.warn("function run",firstname1 + " "+lastname1)
    this.setState({
        firstname:firstname1,address:lastname1,phoneno:phoneno,userImage:userImage
    })
  }
  static navigationOptions = ({ navigation }) => {
    // const {state, setParams} = navigation;

    return {
      title: 'Form Page',
      headerRight: (
        <View style={{flexDirection:'row'}}>
      
         <Button
          title='Next'

           onPress={() => navigation.navigate('MyEditUserForm')
           }
        />
        </View>
        
      ),
    };
  };

  editData = () => {
      console.warn
                this.props.navigation.navigate("MyEditUserForm",{name : this.state.firstname+this.state.lastname,address:this.state.address,phoneno:this.state.phoneno,update :this.changeIdPassword})
  }
  handleImageChnage=()=>{}

  render() {
   //const{userName,LastName,updata}=this.props.navigation.state.params;
    return (
      <View style={{flex:1,alignItems:'center',marginTop:'30%'}}>
        <CircleView path={this.state.userImage}/>
        <Label iconname={"user"} info={this.state.firstname}/>  
        <Label iconname={"address"} info={this.state.address}/>
        <Label iconname={"phone"} info={this.state.phoneno}/>
        
          {/* <View style={{flexDirection:'row'}}>
        <Text> First Name: </Text>
        <TextInput  value={this.state.firstname}></TextInput>
        </View>
        <View style={{flexDirection:'row'}}>
        <Text> Last Name: </Text>
        <TextInput value={this.state.lastname} ></TextInput>
        </View> */}
        <View style={{flexDirection:'row'}}>

       <TouchableOpacity style={{width:'80%',borderWidth:1,borderColor:'red',alignItems:'center',padding:10,backgroundColor:'green'}} onPress={this.editData}>
<Text>Edit</Text>
       </TouchableOpacity>
        </View>
      </View>
    );
  }
}


function Label(props){
return(
<View style={styles.label}>
<Icon1 name={props.iconname} size={25} color='white' borderColor='black'/>
<View>
<Text style={styles.name}>{props.info}</Text>
</View>
<View>

</View>
</View>
)
}
const styles = StyleSheet.create({
  label:{
    width:'80%',
    height:'auto',
    flexDirection:'row',
    margin:10,
    justifyContent:'space-between',
    padding:10,
    borderWidth:1,
    borderColor:'black',
    backgroundColor:'#ddd',
    
  },
  name:{
    fontSize:20,
    fontWeight:'bold'
  }
});

export default form1;
