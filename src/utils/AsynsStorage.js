import AsyncStorage from '@react-native-community/async-storage';

export default class MyAsyncStorage{
 static  setdata(key,value)
{
    console.warn("incoming key=>",key)
    console.warn("incoming value=>",value)
    AsyncStorage.setItem(key,value);
}



    

}