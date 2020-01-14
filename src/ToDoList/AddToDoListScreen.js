import React, { useState } from 'react';
import { View, Text, StyleSheet, ImageBackground, FlatList, Button } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import MyStorage from './AsyncStorage'
import CheckBox from 'react-native-check-box'
import Icon from 'react-native-vector-icons/AntDesign'
import AddIcon from 'react-native-vector-icons/AntDesign'
import Constant from './Constant'



function Item(props) {
    const [getSelected, setSelected] = useState(props.title.isCompleted)
    return (
        <View style={styles.item} >
            <View style={styles.title}>
                <TouchableOpacity onPress={()=>{props.goForEditScreen(props.title.id)}} >
                <Text >{props.title.task}</Text>
                    </TouchableOpacity>
                </View>
            <View style={styles.CheckStyle}>
                <CheckBox style={styles.CheckBoxstyle}
                    isChecked={getSelected}
                    onClick={() => {
                        if (getSelected) {
                            props.ChnageTickItem(props.title.id)
                            setSelected(false)
                        }
                        else {
                            props.ChnageTickItem(props.title.id)
                            setSelected(true)
                        }
                    }} />
                <Icon onPress={() => { props.DeleteItem(props.title.id) }}
                    style={styles.CheckBoxstyle}
                    name="delete" size={18} />
            </View>
        </View>
    );
}



export default class AddToDoListScreen extends React.Component {
    state = { userTOdo: '' }

    componentDidMount() {
        this.props.navigation.setParams({ deleteAllElement: this.deleteAllElement });
        this.focusListener = this.props.navigation.addListener('didFocus', () => {
            MyStorage.getvalue(Constant.userKey, (res) => {
                this.setMyState("userTOdo", JSON.parse(res))
            })
        })
    }
    
    static navigationOptions = ({ navigation }) => {
        return {
            headerRight: () => (
                <Button
                    onPress={navigation.getParam('deleteAllElement')}
                    title="Delete All"
                    color="black"
                />
            ),
        };
    };

    deleteAllElement = () => {
        this.setMyState("userTOdo", '')
        MyStorage.cleanDataBase()

    };

    ChnageTickItem = (id) => {

        MyStorage.getvalue(Constant.userKey, (res) => {
            let copyData = JSON.parse(res);
            let index = copyData.findIndex(a => a.id === id);

            if (index > -1) {
                if (copyData[index].isCompleted) {
                    copyData[index].isCompleted = false

                    MyStorage.setvalue(Constant.userKey, JSON.stringify(copyData))
                }
                else {
                    copyData[index].isCompleted = true

                    MyStorage.setvalue(Constant.userKey, JSON.stringify(copyData))
                }
            }
        })
    }

    DeleteItem = (id) => {
        let copyData = this.state.userTOdo;

        let index = copyData.findIndex(a => a.id === id);
        if (index > -1) {//if element found
            //.log("index", index)
            copyData.splice(index, 1);
            this.setState({ userInput: copyData }, () => {
                MyStorage.setvalue(Constant.userKey, JSON.stringify(copyData))
            });
        }
    }
    componentWillUnmount() {
        this.focusListener.remove();
    }
    goTOAddListScreen = () => {
        this.props.navigation.navigate('AddTask',{
            editkey: '',
        })
    }
    goForEditScreen = (id) => {
        this.props.navigation.navigate('AddTask',{
            editkey: id,
        })
        console.warn("sended key",id)
    }
    setMyState(key, value) {

        this.setState({
            [key]: value
        })
    }
    renderItems = (rowData) => {
        let { item, index } = rowData;
        return (
            <Item
                title={item}
                index={index}
                DeleteItem={this.DeleteItem}
                ChnageTickItem={this.ChnageTickItem}
                goForEditScreen={this.goForEditScreen} />
        );
    }

    render() {
        return (
            <View style={styles.parent}>
                <View style={styles.firstChild}>

                    <FlatList
                        data={this.state.userTOdo}
                        renderItem={this.renderItems}
                        keyExtractor={item => item.id} />
                    <View style={styles.secondChild}>
                        <TouchableOpacity style={styles.circle}
                            onPress={this.goTOAddListScreen}>
                            <ImageBackground style={styles.circle} >
                                <AddIcon name="plus" size={48} />
                            </ImageBackground>

                        </TouchableOpacity>

                    </View>
                </View>
            </View>
        );
    }

}
const styles = StyleSheet.create({
    parent: {
        flex: 1, backgroundColor: '#ddd'

    },
    firstChild: {
        flex: 1,

    }, secondChild: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',


    }, circle: {
        height: 50,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: 'white',
        elevation: 10,


    }, item: {
        flex:1,
        margin:5,
        width:'100%',padding:10,
        flexDirection:'row',backgroundColor:'white'
    },
    title: {
        fontSize: 12,
        flex: 0.8
    },
    CheckBoxstyle: {
        flex: 1
    }, CheckStyle: {
        flexDirection: 'row', flex: 0.2, justifyContent: 'space-evenly', paddingHorizontal: 5
    }
});