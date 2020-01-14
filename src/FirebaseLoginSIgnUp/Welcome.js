import React, { PureComponent } from 'react';
import { View, Text, BackHandler, FlatList, StyleSheet, SafeAreaView } from 'react-native';
import UserChat from './ChatComponent/chatview'
import { connect } from 'react-redux'
import { saveFireBasechatData } from '../Redux Example/Action/Action';
import { TextInput } from 'react-native-gesture-handler';
import { db } from '../config';
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/Entypo'
export  class Welcome extends PureComponent {

  constructor(props) {
    super(props)
    this.state = {
 
    }
  }

  addmMsgToArray = (val) => {
    this.setState({
      empdata: [...this.state.empdata, { id: (this.state.empdata.length), key: "abc", text: val }]
    })
  }
  componentDidMount() {
    this.text = this.props.navigation.getParam('key', 'nothing sent');

    this.getAllDataFromFireabse()
  }
  getAllDataFromFireabse = () => {
    let room = this.props.loginUid < this.text.ReceiverKey ? this.props.loginUid + "-" + this.text.ReceiverKey : this.text.ReceiverKey + "-" + this.props.loginUid
    firebase.database().ref().child("Chats").child(room).on('value', (snap) => {
      var temp = []
      var key = snap._childKeys
     // console.warn("getting value=>", snap.val())
      //console.warn("converted key=>", key)
      key.filter(function (val, index, array) {
        temp.push(snap.val()[val])
        //console.warn(snap.val()[val].messgae)
      })
        this.props.addFirebaseChat(temp)
      // this.setState({
      //   userChat: temp
      // }, () => {
      //   console.warn("flat list data=>", this.state.userChat)
      // })
    })
  }
  setDataTOFireBase = () => {
    let room = this.props.loginUid < this.text.ReceiverKey ? this.props.loginUid + "-" + this.text.ReceiverKey : this.text.ReceiverKey + "-" + this.props.loginUid
    db.ref('/Chats').child(room).push({
      messgae: this.state.val,
      time: firebase.database.ServerValue.TIMESTAMP,
      Source: this.props.loginUid
    }, (val) => {

      if (val === null) {

      }
    });
  }

  getInput = (value) => {
    this.setState({
      val: value
    })
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: 'green' }} >
        <FlatList
          style={{ flex: 1, marginBottom: 10 }}
          data={this.props.firebasechat}
          renderItem={({ item, index }) => {
            return (
              <UserChat
                Source={this.props.loginUid}
                userdata={item} />
            );
          }} />
        <TextInput placeholder="enter Msg..."
          style={styles.textInput}
          value={this.state.empty}
          onSubmitEditing={() => { this.setDataTOFireBase() }}
          onChangeText={(val) => { this.getInput(val) }}
        />
      </View >

    );
  }
}
const styles = StyleSheet.create({
  textInput: {
    position: 'absolute',
    width: '100%'
    , bottom: 40, padding: 10,
    backgroundColor: 'white'

  }
});
const mapStateToProps = state => {
 // console.warn("run TIme",state.saveFireBaseUid.loginUid)

  return {
    FirebaseUserData: state.saveFireBaseUser.FirebaseUser,
    firebasechat:state.saveFireBasechat.firebasechat,
    loginUid:state.saveFireBaseUid.loginUid
  }
}
const mapDispatchToProps = dispatch => ({

  addFirebaseChat: (payload) => dispatch(saveFireBasechatData(payload)),

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Welcome);
