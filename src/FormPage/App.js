
import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,Button,
  Alert,FlatList
} from 'react-native'
//import List from './componentfile/flatlist'
//import MyList from './componentfile/flatlist'
import { withNavigation } from 'react-navigation';

import  {createAppContainer}  from 'react-navigation';
import  {createStackNavigator, HeaderTitle}  from 'react-navigation-stack';

export default class EX extends Component {
  
  constructor(props) {  
    super(props)

    console.warn("myconsrtuctor")
    this.state = { count: 1,empRecord:[],name:"",password:"",key:""
  
    }
  
  }
  showDetails = () => {
   alert(this.props)
}
  

  // static navigationOptions = {
  //  title:"Form Page1",
  //  backgroundColor:'red',
  //  headerRight: () => (
  //   <Button
  //     onPress={() =>{alert( this.showDetails())}}
  //     title="Info"
  //     color="black"
  //   />
  // )
  
  
  // };
  static navigationOptions = ({ navigation }) => {
    // const {state, setParams} = navigation;

    return {
      title: 'Form Page',
      headerRight: (
        <View style={{flexDirection:'row'}}>
        <Button
          title='Next'
          // onPress={() => setParams({ mode: isInfo ? 'none' : 'info'})}
           onPress={() => navigation.navigate('Gallery')
           }
        />
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
  // onPress = () => {
  //   this.setState({
  //     count: this.state.count+1
  //   })
  // }
  onMe(text){
    this.setState({
      count:text
    })
  }
  bindvalue(){

    this.counter=0;
    var i=0
    var users={
      name:this.state.name,
      password:this.state.password,
      key:Math.random().toString(36).substring(7)
    };
    //Alert.alert(users.name)
    var copyarr=this.state.empRecord;
    copyarr[copyarr.length]=users;
    // var temp=this.state.empRecord.push(users)
    this.setState({empRecord:copyarr});




  }
  handleDelete(item)
  {
  Alert.alert(item)
  }
  
  setinput(value){
    
    this.setState({
      name:value
    })
  }
  fun =(hello)=>
  {
    alert(hello)
  }
  setdialog(value){
    
    Alert.alert(value+"")
  }

setPassword(value){
  this.setState({
    password:value
  })
}
 render() {
   return (
   
     <View style={styles.container}>
       {()=>{this.props.navi}}
       {/* <TouchableOpacity
         style={styles.button}
         onPress={this.onMe.bind(this,"100")}
       >
         <Text> Touch Here </Text>
       </TouchableOpacity>
       <View style={[styles.countContainer]}> */}
         {/* <Text style={[styles.countText]}> */}
           {/* {
             this.state.count
           }
          </Text>
        </View> */}
<View style={styles.header} >
{/* <Text style={{fontSize:25,fontFamily:'bold'}} >
  FIll This Form 
</Text> */}
</View>
<View style={styles.body}
>
  <View>
    <TextInput placeholder="Enter Your Name" style={styles.edittext} onChangeText={this.setinput.bind(this)}/>
    <TextInput placeholder="Enter Your Password" style={styles.edittext} onChangeText={this.setPassword.bind(this)}/>
  </View>
</View>
 <TouchableOpacity style={styles.mybtn} onPress={this.bindvalue.bind(this)}>
  <Text style={{justifyContent:'center',alignItems:'center'}}>
    Click Me
  </Text>
</TouchableOpacity> 
<TouchableOpacity style={styles.mybtn} onPress={()=>{
  this.props.navigation.navigate('Gallery')
  //this.showDetails()
}}>
  <Text style={{justifyContent:'center',alignItems:'center'}}>
    Click Me
  </Text>
</TouchableOpacity>
<View style={styles.listViewStyle}> 
 {
 <FlatList

        data={this.state.empRecord}
        renderItem={ ( { item,index,separators } ) => <Item title={item} abc={this.fun} xyz={index} /> }
        keyExtractor={item => item.name}
      />
       }
</View>


 </View>
    )
  }
}
function Item(props) {
  console.log("incoming_props",props)
 return (
   <View style={styles.item}>
       <View style={styles.design}>
     <Text style={styles.title} onPress={props.abc.bind(this,props.xyz)}>{props.title.name}</Text>
     </View>
     <View>
     <Text style={styles.title}>{props.title.password}</Text>
     </View>
   </View>
 );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'lightblue'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
  listViewStyle:{
width:'100%',height:'40%',marginTop:20
  },
  mybtn:{
    marginLeft:'25%',
    width:'50%',height:40,backgroundColor:'#ddd',justifyContent:'center',alignItems:'center'
  },
  header:{
height:50,
width:'100%',
backgroundColor:'#ddd',elevation:4,justifyContent:'center',alignItems:'center'
  },
  body:{
height:300,width:'100%',borderRadius:3,marginTop:20,justifyContent:'center'
  },
  countContainer: {
    alignItems: 'center',
    padding: 10
  }, item: {
    backgroundColor: '#ddd',
    padding: 10,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  design:{
elevation:5,width:'100%',padding:5
  },
  title: {

    fontSize: 32,
  },
  edittext:{
    margin:3,
borderWidth:2,backgroundColor:'#ddd',marginBottom:10
  },
  countText: {
  
  }
})