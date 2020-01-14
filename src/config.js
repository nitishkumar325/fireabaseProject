import Firebase from 'react-native-firebase';

let config = {
  authDomain: "mytestingproject-c3ec2.firebaseapp.com",
    databaseURL: "https://mytestingproject-c3ec2.firebaseio.com",
    projectId: "mytestingproject-c3ec2",
    storageBucket: "mytestingproject-c3ec2.appspot.com",
    messagingSenderId: "379202579413",
    appId: "1:379202579413:web:5b380e248a3e60301feb5c",
    measurementId: "G-9WXEG2NB16"
};
let app = Firebase.initializeApp(config);
export const db = app.database();