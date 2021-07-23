import firebase from "firebase/app";


  var firebaseConfig = {

    apiKey: "AIzaSyAit2L-FdM3h8PYTyrjUuUeTtSVbObzw2g",
    authDomain: "biblioteca-7190d.firebaseapp.com",
    projectId: "biblioteca-7190d",
    storageBucket: "biblioteca-7190d.appspot.com",
    messagingSenderId: "68600301326",
    appId: "1:68600301326:web:c2c461a340582ddd7ab95f"
  };

const fire = firebase.initializeApp(firebaseConfig);

export default fire;