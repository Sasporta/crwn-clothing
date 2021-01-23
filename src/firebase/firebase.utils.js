import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyARr0rNLLBvib3PDqstiFj7QdHFwWUuUOE",
    authDomain: "crwn-db-b5f00.firebaseapp.com",
    projectId: "crwn-db-b5f00",
    storageBucket: "crwn-db-b5f00.appspot.com",
    messagingSenderId: "142359346007",
    appId: "1:142359346007:web:2a51f41c39a52c36205c12",
    measurementId: "G-BP1PMK3GBW"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;