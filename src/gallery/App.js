import React, { PureComponent } from 'react';
import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native';
import SuperParent from './superParent'
import HeaderComponent from './headerComponent'
import BottomNavigationComponent from './bottomNavigationComponent'

const DATA = [
  {
    month: 'january',
    chall: '2 Challenges',
    title: ['jungal suffari', 'jumanji'],
    time: ['1-june 2001 - 21 may 2019', '1-june 2001 - 21 may 2019']

  },
  {
    month: 'Febuary',
    chall: '7 Challenges',
    title: ['jungal suffari', 'jumanji'],
    time: ['1-june 2001 - 21 may 2019', '1-june 2001 - 21 may 2019']
  },
  {
    month: 'March',
    chall: '5 Challenges',
    title: ['jungal suffari', 'jumanji'],
    time: ['1-june 2001 - 21 may 2019', '1-june 2001 - 21 may 2019']
  },
];

export default class App extends PureComponent {

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  
  static navigationOptions = {
    title: 'Gallery',
  };
  render() {
    return (
      <View style={style.body}>
        <HeaderComponent />
      
        <FlatList
          data={DATA}
          renderItem={({ item }) => <SuperParent month={item.month} chall={item.chall} duration={item.time}
          />}
          keyExtractor={item => item.month}
        />
        {/* <HeaderBar /> */}
        {/* <GalleryParent /> */}
        {/* <GalleryParent /> */}
        <BottomNavigationComponent />
      </View>
    );
  }
}


const style = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
    justifyContent: "space-between"
  }
});
