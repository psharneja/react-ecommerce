import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyDzNxycfhytRF-PAbEKqlt_LQpR6bkU9yE",
  authDomain: "react-ecommerce-db-554a7.firebaseapp.com",
  databaseURL: "https://react-ecommerce-db-554a7.firebaseio.com",
  projectId: "react-ecommerce-db-554a7",
  storageBucket: "react-ecommerce-db-554a7.appspot.com",
  messagingSenderId: "271625018339",
  appId: "1:271625018339:web:527c393a47d42f15b39ed6",
  measurementId: "G-60TXGM6PRH"
};

firebase.initializeApp(config);

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
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = auth.onAuthStateChanged(userAuth => {
      unsubscribe();
      resolve(userAuth);
    }, reject);
  });
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);

export default firebase;


//rules_version = '2';
//service cloud.firestore {
 // match /databases/{database}/documents {

    /* // This rule allows anyone on the internet to view, edit, and delete
    // all data in your Firestore database. It is useful for getting
    // started, but it is configured to expire after 30 days because it
    // leaves your app open to attackers. At that time, all client
    // requests to your Firestore database will be denied.
    //
    // Make sure to write security rules for your app before that time, or else
    // your app will lose access to your Firestore database
    	// allow write -> create and update and delete
      // allow create, update; -> create and update
      // allow read -> get and list
      // allow get -> get specific document only
      // allow list -> get list but not specific document
      // allow read, write: if request.time < timestamp.date(2020, 12, 25);
*/
   //match /{document=**} {
     // allow read;
     // allow create, update;

    //}
  //}
//}


//rules_version = '2';
//service cloud.firestore {
  //match /databases/{database}/documents {
//     match /users/{userId} {
  //    allow get, create: if request.auth != null && request.auth.uid == userId;
   // }
 //  match /collections/{collection} {
 // 	allow read;
  //  allow write: if request.auth != null && request.auth.uid == "myuserid";
 // }
 // }
//}