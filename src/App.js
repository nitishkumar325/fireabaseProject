import React from 'react';
import { Provider } from 'react-redux'
import Store from '../src/Redux Example/Store'
import  {View, Text,Button}  from 'react-native';
import  {createAppContainer,NavigationAction}  from 'react-navigation';
import  {createStackNavigator, HeaderBackButton}  from 'react-navigation-stack';
 import formScreen from './FormPage/App'
 import GalleryScreen from './gallery/App'
 import MyAdvancedList from './FlatLIstAdvanced/App'
 import Api from './ApiCalling.js/api'
 import PullToRefresh from './PullToRefresh/PullToRefresh'
 import TestProject from './TestProject/App'
 import Form1 from './ProfilePageEdit/form1'
 import EditUserForm from './ProfilePageEdit/form1'
 import EX from './FormPage/App'
 import Notification from './FirebaseNotofication/notification'
 import UploadData from './UploadData/uploadData'
 import ProfilePage from './FirebaseLoginSIgnUp/Screen/ProfilePage'
import uploadData from './UploadData/uploadData';
import TabNavigation from './tabNavigation/tabNavigation'
import SplashScreen from './AsyncStorageTest/splashScreen'
import SignUpScreen from './AsyncStorageTest/SignUpScreen'
import DashBoardEmail from './AsyncStorageTest/DashBoardForEmail'
import LoginScreen from './AsyncStorageTest/LoginScreen'
import LoginDashboard from './AsyncStorageTest/LoginDashboard'
import GoogleLoginIn from './GoogleSignIn/googleSignIn'
import InstagramLogin from './instagramLogin/instagramLogin'
import TodoProject from './ToDoList/SplashScreen'
import AddToDoListScreen from './ToDoList/AddToDoListScreen'
import AddTask from './ToDoList/ADDTask'
import Animation from './AnimationTesting/animation'
 import Firebase from './FireBaseProject/firebase'
 import FirebaseSignUpScreen from './FirebaseLoginSIgnUp/SignUpScreen'
 import FirebaseLoginScreen from './FirebaseLoginSIgnUp/LoginScreen'
 import IntroSlider from './FirebaseLoginSIgnUp/introSlider'
 import WelcomeScreen from './FirebaseLoginSIgnUp/Welcome'
 import ChatList from './FirebaseLoginSIgnUp/ChatList'
  import ReduxDemo from './Redux Example/ReduxDemo'
  import ReduxForm from './Redux Example/ReduxForm'
  import FirstScreen from './TimeOut tESTING/firstscreen'
  import SecondScreen from './TimeOut tESTING/SecondScreen'
class HomeScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'powderblue',borderWidth:1,borderColor:'yellow' }}>
        <Text>Home Screen</Text>

        <Button
          title="1.Go to Notification"
          onPress={() => this.props.navigation.navigate('Notification')   }
        
        />
        <Button
          title="1.Go to Form"
          onPress={() => this.props.navigation.navigate('form')   }
        
        />
          <Button
          title="2.Go to gallery"
          onPress={() => this.props.navigation.navigate('Gallery')}
        />
          <Button
          title="3.Go to Api Calling Page"
          onPress={() => this.props.navigation.navigate('ApiCalling')}
        />
          <Button
          title="4.Go to  FlatList Advanced"
          onPress={() => this.props.navigation.navigate('MyList')}
        />
         <Button
          title="5.Go to  Pull To Refresh"
          onPress={() => this.props.navigation.navigate('PullToRefresh')}
        />
        <Button
          title="6.Go to  Test Project"
          onPress={() => this.props.navigation.navigate('TestProject')}
        />
           <Button
          title="6.Go to  Profile Project"
          onPress={() => this.props.navigation.navigate('MyEditUserForm')}
        />
         <Button
          title="6.Go to  Upload  Project"
          onPress={() => this.props.navigation.navigate('uploadData')}
        />
        <Button
          title="6.Go to TabNavigation  Project"
          onPress={() => this.props.navigation.navigate('TabNavigation')}
        />
         <Button
          title="6.Go to SplashScreen Project"
          onPress={() => this.props.navigation.navigate('SplashScreen')}
        />
         <Button
          title="6.Go to GoogleLoginIn Project"
          onPress={() => this.props.navigation.navigate('GoogleLoginIn')}
        />
          <Button
          title="6.Go to instagramLogin  Project"
          onPress={() => this.props.navigation.navigate('InstagramLogin')}
        />
           <Button
          title="6.Go to TO-do Project"
          onPress={() => this.props.navigation.navigate('TodoProject')}
        />
                   <Button
          title="6.Go to TO-Animation Project"
          onPress={() => this.props.navigation.navigate('Animation')}
        />
                           <Button
          title="6.Go to TO-Animation Project"
          onPress={() => this.props.navigation.navigate('Firebase')}
        />
                            <Button
          title="6.Go to SignUpProject Project"
          onPress={() => this.props.navigation.navigate('FirebaseLoginScreen')}
        />
                             <Button
          title="6.Go to SignUpProject Project"
          onPress={() => this.props.navigation.navigate('FirebaseLoginScreen')}
        />
                               <Button
          title="6.Go to ReduxForm Project"
          onPress={() => this.props.navigation.navigate('ProfilePage')}
        />


      </View>
    );
  }
}

class DetailsScreen extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Details Screen</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.navigate('uploadData')}
        />
      </View>
    );
  }
}



const RootStack = createStackNavigator(
  {
    ChatList: {screen: ChatList,
    navigationOptions:()=>({
     headerBackTitle:null,title:'Chat List'
     

    })},
     UserForm: {screen: Form1},
    form: {screen: EX,navigationOptions:()=>({
     
    })},
    Gallery:{screen: GalleryScreen,navigationOptions:()=>({
      headerBackTitle:null
    })},
    ApiCalling:Api,
    MyEditUserForm:EditUserForm,
    MyList:MyAdvancedList,
    PullToRefresh:PullToRefresh,
    Notification:Notification,
    TestProject:TestProject,
    uploadData:uploadData,
    TabNavigation:TabNavigation,
    GoogleLoginIn:GoogleLoginIn,
    InstagramLogin:InstagramLogin,
    Animation:Animation,
    Firebase:Firebase,
    SignUpScreen:SignUpScreen,
    FirebaseLoginScreen:FirebaseLoginScreen,
    IntroSlider:IntroSlider,
    ReduxDemo,ReduxDemo,
    ReduxForm:ReduxForm,
    ProfilePage:ProfilePage,
    FirstScreen:FirstScreen,
    SecondScreen:SecondScreen,
    Home: {screen: HomeScreen,
      navigationOptions:()=>({
       headerBackTitle:null,title:'Menu'
       
  
      })},
    WelcomeScreen:{ screen: WelcomeScreen,navigationOptions:()=>{
   HeaderBackButton:null
    }},
    FirebaseSignUpScreen:{screen:FirebaseSignUpScreen ,navigationOptions:()=>{
      
      
    }},
    AddTask:{screen: AddTask,navigationOptions:()=>({
      title:'Welcome'
    })},
    AddToDoListScreen:{screen: AddToDoListScreen,navigationOptions:()=>({
      title:'Daily List',headerLeft:null
    })},
    TodoProject:{screen: TodoProject,navigationOptions:()=>{
    }},
    SplashScreen:{screen: SplashScreen,navigationOptions:()=>({
      title:"SplashScreen"
     })},
    SignUpScreen:{screen: SignUpScreen,navigationOptions:()=>({
     title:"SignUp ",HeaderBackButton:null,gesturesEnabled:false, headerLeft: null
    })},
    DashBoardEmail:{screen: DashBoardEmail,navigationOptions:()=>({
      title:" Email Dashboard"
     })},
    LoginScreen:{screen: LoginScreen,navigationOptions:()=>({
      title:"Login Screen"
     })},
    LoginDashboard:{screen: LoginDashboard,navigationOptions:()=>({
      title:"Login Dashboard"
     })},
    
    
  },
  {
   initialRouteName: 'Home',

    
  }
);

const AppContainer = createAppContainer(RootStack);

export default class App extends React.Component {
  render() {
    return(
    <Provider store={Store}>
  <AppContainer />
    </Provider>
    )
  }
}
