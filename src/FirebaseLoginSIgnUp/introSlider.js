import React from 'react';
import { StyleSheet,View ,Text,Image} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import LinearGradient from 'react-native-linear-gradient';
 
const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('./Images/download.jpeg'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('./Images/download.jpeg'),
    backgroundColor: '#febe29',
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum    bla bla bla',
    image: require('./Images/download.jpeg'),
    backgroundColor: '#22bcb5',
  }
];
 
export default class IntroSlider extends React.Component {
  state = {
    showRealApp: false
  }
  _renderItem = (item) => {
      console.warn(typeof(item))
      console.warn(item.item.key)
    return (
<LinearGradient start={{x: 0.5  , y: 1}} end={{x: 0, y: 0.3}} colors={['white','red']} style={styles.linearGradient} useAngle={true} angle={0}>
  <Text style={styles.buttonText}>
    Sign in with Facebook
  </Text>
</LinearGradient>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.props.navigation.navigate('FirebaseLoginScreen')
  }
  render() {
 
      return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone} bottomButton doneLabel={"Start"} nextLabel={"h"} buttonStyle={{backgroundColor:'purple'}}/>;

  }
}
 
const styles = StyleSheet.create({
    mainContent: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'space-around',
    },
    image: {
      width: 320,
      height: 320,
    },
    text: {
      color: 'rgba(255, 255, 255, 0.8)',
      backgroundColor: 'transparent',
      textAlign: 'center',
      paddingHorizontal: 16,
    },
    title: {
      fontSize: 22,
      color: 'black',
      backgroundColor: 'yellow',
      textAlign: 'center',
      marginBottom: 16,
    },slide:{
        flex:1,
    },  linearGradient: {
      flex: 1,
      paddingLeft: 15,
      paddingRight: 15,
      borderRadius: 5
    },
    buttonText: {
      fontSize: 18,
      fontFamily: 'Gill Sans',
      textAlign: 'center',
      margin: 10,
      color: '#ffffff',
      backgroundColor: 'transparent',
    }
  });