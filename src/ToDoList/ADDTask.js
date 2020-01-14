import React, { PureComponent } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import MyStorage from './AsyncStorage'
import Constant from './Constant'
var globalKey=''
var globalIndex=null
export default class ADDTask extends React.Component {
  state = { userInput: '' }



  setMyState(key, value) {
    this.setState({
      [key]: value
    })
  }

componentDidMount()
{
  //console.warn("re",this.props.navigation.state.params.editkey)
  globalKey=this.props.navigation.state.params.editkey;
  if(globalKey!=''){
MyStorage.getvalue(Constant.userKey,(res)=>{
  let temp=JSON.parse(res)
  globalIndex=temp.findIndex(a=>a.id===globalKey)
 // console.warn("index=>",globalIndex)
  if(globalIndex>-1)
  {
    this.setMyState("userInput",temp[globalIndex].task)
  }

})
}else{
  globalIndex=null
}
}

  goTOBack() {
    if (this.state.userInput.length > 0 && this.state.userInput != '') {
      MyStorage.getvalue(Constant.userKey, (res) => {
        if (res !== null) {//every timr
          var temp = JSON.parse(res)
       //   console.warn("here global index",globalIndex)
          if(globalIndex!=null)
          {
           temp[globalIndex].task=this.state.userInput
          }else{
          temp.push({
            task: this.state.userInput
            , "id": Math.random()
            , "isCompleted": false
          })
        }
          MyStorage.setvalue(Constant.userKey, JSON.stringify(temp))
          this.props.navigation.goBack();
        }
         else {//first time 
          MyStorage.setvalue(Constant.userKey, JSON.stringify([{
            "task": this.state.userInput
            , "id": Math.random()
            , "isCompleted": false
          }]))
          this.props.navigation.goBack();
        }

      })
    } else {
      alert("please Write Something...")
    }

  }
  setMyState(key, value) {
    this.setState({
      [key]: value
    })
  }
  render() {
    return (
      <View style={styles.parent}>
        <TextInput placeholder="please Write Something..."
        value={this.state.userInput}
          onChangeText={(value) => {
            this.setMyState("userInput", value)
          }}
          onSubmitEditing={() => { this.goTOBack() }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  parent: {
    flex: 1, padding: 10, backgroundColor: '#ddd'
  },
  textinput: {
    flex: 1,

  }
});
