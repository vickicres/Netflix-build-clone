import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBXU5mg743NgKzl39dmXCPxhnt7NiWXvsk",
  authDomain: "netflix-clone-491a0.firebaseapp.com",
  projectId: "netflix-clone-491a0",
  storageBucket: "netflix-clone-491a0.appspot.com",
  messagingSenderId: "761131914099",
  appId: "1:761131914099:web:ceb8df9bc37b1afed52b06"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth, db };