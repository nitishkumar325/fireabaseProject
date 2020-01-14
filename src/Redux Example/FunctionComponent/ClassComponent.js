import React, { Component } from 'react';
import {  Text } from 'react-native';
import {connect} from 'react-redux'
import { saveData } from '../Action/Action';
import DatePicker from 'react-native-datepicker'
import { View, SafeAreaView, StyleSheet, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

 class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
        date: this.convertDateInProperFormat(),
        name: '',
        email: ''
      };
  }
  setMyState = (key, value) => {
    this.setState({
      [key]: value
    })
  }
  handleName = (value) => {
    this.setMyState('name', value)
  }
  handleEmail = (value) => {
    this.setMyState('email', value)
  }
  addUser = () => {
    let payload = {
      name: this.state.name,
      email: this.state.email,
      dateofBirth: this.state.date
    }
  }
  convertDateInProperFormat = () => {

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!

    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = '0' + dd;
    }
    if (mm < 10) {
      mm = '0' + mm;
    }
    var today = yyyy + '/' + mm + '/' + dd;
    //console.warn(today)
    return today

  }
  showData = () => {
    let payload = {
      name: this.state.name,
      email: this.state.email,
      dateofBirth: this.state.date
    }
     //this.convertDateInProperFormat()
     //console.warn("name=>",this.state.name,"email=>",this.state.email,"date-of-birth=>",this.state.date)
    this.props.addUser(payload)
  }
  


  render() {
    return (
        <SafeAreaView style={{ flex: 1 }} >
        <View style={styles.formParent}>
          <TextInput style={styles.TextInput} placeholder="enter Your Name" onChangeText={this.handleName} />
          <TextInput style={styles.TextInput} placeholder="enter Your Email " onChangeText={this.handleEmail} />
          <View style={styles.dobStyle}>
            <Text>Select Your  Birth Date</Text>
            <DatePicker maxDate={new Date()}
              confirmBtnText="Confirm"
              cancelBtnText="Cancel"
              date={this.state.date}
              onDateChange={(date1) => {
                this.setState({
                  date: date1
                })
              }} />
          </View>
          <TouchableOpacity style={{ alignItems: 'center', padding: 10, borderRadius: 20 }} onPress={this.showData}>
            <Text style={{ backgroundColor: 'yellow', padding: 10, borderColor: 'red', borderWidth: 1, borderRadius: 10 }}>Submit</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => {
    const { name,email,dateofBirth } = state.DataSaveReducer;
    console.warn("added name=>",name,email,dateofBirth)
    return{
      name,email
    }
  };
  
  const mapDispatchToProps = dispatch => ({
  
     addUser: (payload) => dispatch(saveData(payload)),
  
  });
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(ClassComponent);
const styles = StyleSheet.create({
    formParent: {
      height: 400,
      width: '100%',
      position: 'absolute',
      justifyContent: 'center'
      , top: 100,
    }, TextInput: {
      paddingHorizontal: 15,
      marginBottom: 2,
      padding: 10, borderWidth: 1,
      borderColor: '#ddd'
    }, dobStyle: {
      paddingHorizontal: 10,
      paddingVertical: 10,
      paddingRight: 20,
      justifyContent: 'space-between',
      flexDirection: 'row'
    }
  });
