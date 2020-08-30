import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD9PLVTq3oLC3O7psBH6F88nm2OcGR-ewE",
    authDomain: "fb-clone-da943.firebaseapp.com",
    databaseURL: "https://fb-clone-da943.firebaseio.com",
    projectId: "fb-clone-da943",
    storageBucket: "fb-clone-da943.appspot.com",
    messagingSenderId: "209864364755",
    appId: "1:209864364755:web:b4956057e3926a144cfa26"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;