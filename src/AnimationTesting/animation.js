import React from 'react'
import { View, Text, Animated, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';



export default class animation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrollY: new Animated.Value(0),
    };
  }
  _onScroll = (event) => {

    // this.setState({
    //   scrollY:event.nativeEvent.contentOffset.y
    // })
  }
  renderItem = () => {
    return (
      <View style={{ margin: 10, width: null, alignSelf: 'stretch', height: 50, backgroundColor: 'green' }} />
    );


  }
  render() {
    console.warn("state y",this.state.scrollY)
    const image_Height = this.state.scrollY.interpolate({
      inputRange: [0, 500],
      outputRange: [400, 70],
      extrapolate: 'clamp',
    })
    const opacity = this.state.scrollY.interpolate({
      inputRange: [0, 500],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    })
    const opacity1 = this.state.scrollY.interpolate({
      inputRange: [0, 500],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    })
    const inner = this.state.scrollY.interpolate({
      inputRange: [0, 500],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    })
    const innerheight = this.state.scrollY.interpolate({
      inputRange: [0, 500],
      outputRange: [0, 30],
      extrapolate: 'clamp',
    })
    const formRight = this.state.scrollY.interpolate({
      inputRange: [0, 500],
      outputRange: [200, 10],
      extrapolate: 'clamp',
    })

    const imageTop = this.state.scrollY.interpolate({
      inputRange: [0, 500],
      outputRange: [200, 5],
      extrapolate: 'clamp',
    })
    return (
      <View style={{ flex: 1 }}>
        <Animated.Image source={require('./Images/blueFlower.jpeg')} opacity={opacity} style={{
          height: image_Height, width: '100%', resizeMode: 'stretch'
        }} />


        <Animated.View opacity={inner} style={{ height: 70, width: '100%', backgroundColor: 'black', zIndex: 100, position: 'absolute' }}   >
          <Animated.View opacity={opacity1} style={{ marginTop: innerheight }}>
           
              <Text style={{ color: 'white', fontSize: 20, flex: 0.5, }}>hello</Text>
            
          </Animated.View>
          <Animated.Image source={require('./Images/blueFlower.jpeg')}
          opacity={1}
          style={{
            height: 60, width: 60, resizeMode: 'stretch',
            position: 'absolute',
            borderRadius: 30,
            zIndex: 100,
            top: imageTop,
            left: formRight,

          }} />
        </Animated.View>

        <Animated.FlatList
          style={{ height: 200, backgroundColor: 'yellow' }}
          data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},]}
          
          onScroll={Animated.event(
            [
              {
                nativeEvent: { contentOffset: { y: this.state.scrollY } }
              }
            ]
          )}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
