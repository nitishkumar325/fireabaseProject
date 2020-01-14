import React, { Component } from 'react';
import { View, Text, SafeAreaView ,ActivityIndicator,FlatList} from 'react-native';
import axios from 'axios';


export default class api extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      empdata: [],
      
    }
  }
  static navigationOptions = {
    title: 'Api Calling '
  };
  getRequest()
  {
    console.warn("inside getrequest");
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then((response) => {

      console.log("data=>", response.data);
       console.warn("ionvoked" + response.data.length);
      var temp=[];

      for(var i = 0; i < response.data.length; i++) {
        temp[i]= JSON.parse(JSON.stringify(response.data[i]))
    }
    console.warn("temp" + temp.length);

      this.setState({ 
          empdata:temp,
        isLoading:false
       });
  
    })
    .catch(error => { console.log(error); 
      console.warn("error",error)
    
    });
  }


  componentDidMount() {
 this.getRequest();
 //this.postRequest();
  }

  render(){

    if(this.state.isLoading){

      return(
        <SafeAreaView style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
          <Text>
            isLoading.....
          </Text>
        </SafeAreaView>
      )
    }else{

    return(
      <SafeAreaView style={{flex: 1, paddingTop:20}}>
        <FlatList
          data={this.state.empdata}
          renderItem={({item,index}) => <Text style={{padding:5,elevation:5,}}>{item.id}, {item.name}</Text>}
          keyExtractor={({id}, index) => id}
        />
      </SafeAreaView>
    );
    }
  }
}
function MyCoustumList(){
  render(





  );

}

