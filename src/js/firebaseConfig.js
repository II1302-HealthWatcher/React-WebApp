import firebase from 'firebase/app';
import 'firebase/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyCOOpKZIBGJstclwS6cqTavAtRs9Gt8RrA",
    authDomain: "healthwatcher-f04bf.firebaseapp.com",
    databaseURL: "https://healthwatcher-f04bf-default-rtdb.firebaseio.com",
    projectId: "healthwatcher-f04bf",
    storageBucket: "healthwatcher-f04bf.appspot.com",
    messagingSenderId: "794503642291",
    appId: "1:794503642291:web:de4ca0411a19544e3644c6"
  };

  // Initialize Firebase
firebase.initializeApp(firebaseConfig);



export default firebaseConfig;
 
  

