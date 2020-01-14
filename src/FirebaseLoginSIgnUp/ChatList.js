import React, { } from 'react';
import { View, Text,TouchableOpacity } from 'react-native';
import MyStorage from './Storage/FireBaseLocalStorage'
import UserChatList from './ChatComponent/UserMemberChatList'
import firebase from 'react-native-firebase'
import Icon from 'react-native-vector-icons/Entypo'
import { connect } from 'react-redux'
import { saveFireBaseData } from '../Redux Example/Action/Action';
import { FlatList } from 'react-native-gesture-handler';

class ChatList extends React.Component {

  constructor(props) {
    super(props);
  
  }
  static navigationOptions =({navigation}) =>{
    return{
    title: "Title",
    headerRight: (
      <TouchableOpacity style={{marginRight:20}} onPress={navigation.getParam('goTOProfilePage')}>
        <Icon name="user" size={20} />

      </TouchableOpacity>
    )
  }}
  ;
  componentWillMount()
  {
    console.warn("call")
    console.warn("getting state=>",this.props.FirebaseUserData)
  }


  goTOProfilePage=()=>{
    console.warn("call")
    this.props.navigation.navigate('ProfilePage')
  }

  componentDidMount() {
    this.props.navigation.setParams({
      goTOProfilePage: this.goTOProfilePage 
    })
    let tempUserId=this.props.UserUid
    firebase.database().ref('Users/').on('value', (snap) => {
      var temp = []
      var key = Object.keys(snap.val())
      key.filter(function (val, index, array) {
           if(tempUserId !== snap.val()[val].id){
            temp.push(snap.val()[val])
           }
      })
         this.props.addFirebaseUser(temp)
    })
  }
  onRowPress = (receiverId) => {
    console.warn("sender before=>",this.props.UserUid,"receiver id=>",receiverId)
   this.props.navigation.navigate("WelcomeScreen",{
    key: {myKey:this.props.UserUid,ReceiverKey:receiverId}
     
   })
   console.warn("sender id=>",this.props.UserUid,"receiver id=>",receiverId)

  }
  render() {
    return (
      <View>
        <FlatList
          data={this.props.FirebaseUserData}
          renderItem={({ item, index }) => {
            return (
              <UserChatList
                onRowPress={(receiverId) => this.onRowPress(receiverId)}
                userdata={item} />
            );
          }} />


      </View>
    );
  }
}
const mapStateToProps = state => {
  console.warn("run TIme",state.saveFireBaseUid.loginUid)

  return {
    FirebaseUserData: state.saveFireBaseUser.FirebaseUser,
    UserUid:state.saveFireBaseUid.loginUid
  }
}
const mapDispatchToProps = dispatch => ({

  addFirebaseUser: (payload) => dispatch(saveFireBaseData(payload)),

});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChatList);

