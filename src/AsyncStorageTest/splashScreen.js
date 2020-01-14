import React, { PureComponent,useState, useEffect } from 'react';
import {  View, Text,SafeAreaView,Animated,Image,StyleSheet
    ,Easing } from 'react-native';
    import * as Animatable from 'react-native-animatable';

export default class splashScreen extends React.Component {
    constructor () {
        super()
        this.spinValue = new Animated.Value(0)
      }
      componentDidMount () {
        
        // setTimeout(() => {
        //     this.props.navigation.navigate('SignUpScreen')
              
        //   }, 4000);
      }

render () {
    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    return (

      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',backgroundColor:'powderblue'}}>
      <FadeInView style={{width: 250, height: 50, backgroundColor: 'powderblue'}}>
        <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>Welcome User</Text>
      </FadeInView>
    </View>
    )
  }
}
const FadeInView = (props) => {
  const [fadeAnim] = useState(new Animated.Value(0))  // Initial value for opacity: 0

  React.useEffect(() => {
    Animated.timing(
      fadeAnim,
      {
        toValue: 1,
        duration: 4000,
      }
    ).start();
  }, [])

  return (
    <Animated.View                 // Special animatable View
      style={{
        ...props.style,
        opacity: fadeAnim,         // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
