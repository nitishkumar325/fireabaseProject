import { AsyncStorage } from 'react-native';
export default class FireBaseLocalStorage {

    static setvalue(key, value) {
        AsyncStorage.setItem(key, value);

    }
    static getvalue(key,c) {
        
        AsyncStorage.getItem(key,(error,res)=>{
            c(res)
        })
    
        

    }
}