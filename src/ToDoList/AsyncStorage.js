import { AsyncStorage } from 'react-native';
export default class MyAsyncStorage {

    static setvalue(key, value) {
        AsyncStorage.setItem(key, value);

    }
    static getvalue(key,c) {
        
        AsyncStorage.getItem(key,(error,res)=>{
           // console.warn("here",res)
            c(res)
        })
    
        

    }
    static getAllKey(callback)
    {
        AsyncStorage.getAllKeys((error,key)=>{
                callback(key)
        })
    }
    static cleanDataBase(){
        AsyncStorage.clear()
    }
}
