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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }
    return userRef;
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;