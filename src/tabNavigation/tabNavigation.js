import React, { PureComponent } from 'react';
import {  View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/AntDesign'
class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Home!</Text>
        </View>
      );
    }
  }
  
  class SettingsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text>Settings!</Text>
        </View>
      );
    }
  }
  const TabNavigator = createBottomTabNavigator(  
    {  
      Home:{  
        screen:HomeScreen,  
        
        navigationOptions:{  
            title:"Myhome",
          tabBarLabel:'Home',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="home" color={tintColor} size={25}/>  
          )  
        }  
      },  
      Profile: {  
        screen:SettingsScreen,  
        navigationOptions:{  
            title:"Profile Screen",
          tabBarLabel:'Profile',  
          tabBarIcon:({tintColor})=>(  
              <Icon name="setting" color={tintColor} size={25}/>  
          )  
        }  
      },  
    },  
    {  
      initialRouteName: "Home",
      defaultNavigationOptions:{
            title:"Sliding Screen"
      },
      tabBarOptions:{
        activeTintColor: 'red',
        inactiveTintColor: 'blue',
      }
      
    },  
); 
  export default createAppContainer(TabNavigator);
