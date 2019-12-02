import { createStore, combineReducers } from 'redux';
import firebase from 'firebase/app';
import 'firebase/firestore';

import { firebaseReducer } from 'react-redux-firebase'
import { firestoreReducer } from 'redux-firestore'

//import { createStore, combineReducers, compose } from 'redux';
//import { reduxFirestore, firestoreReducer } from 'redux-firestore'
//import { reactReduxFirebase, firebaseReducer } from 'react-redux-firebase'
//import { createFirestoreInstance, firestoreReducer } from 'redux-firestore'


// Reducers
// @todo

var firebaseConfig = {
  apiKey: "AIzaSyAmBZGlGkNoMs6Qo_qEYUjrFaMAxMQnsnU",
  authDomain: "react-fb-clients.firebaseapp.com",
  databaseURL: "https://react-fb-clients.firebaseio.com",
  projectId: "react-fb-clients",
  storageBucket: "react-fb-clients.appspot.com",
  messagingSenderId: "1043904320690",
  appId: "1:1043904320690:web:bb445c211739012a9ae5ab",
  measurementId: "G-96C9JD61ES"
};

// react-redux-firebase config
/*
const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true  //Firestore for Profile instead of Realtime DB
}
*/

//  Init Firebase instance
firebase.initializeApp(firebaseConfig);

//  Init firestore
//const firestore = firebase.firestore();

// Add reactReduxFirebase enhancer when making store creator
/*
const createStoreWithFirebase = compose(
  reactReduxFirebase(firebase, rrfConfig),  //firebase instance as first argument
  reduxFirestore(firebase)   // <- needed if using firestore
)(createStore);
*/

const rootReducer = combineReducers({
  firebase: firebaseReducer,
  firestore: firestoreReducer  
});

// Create initial state
const initialState = {};

//Create store
const store = createStore(
  rootReducer, 
  initialState, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// Create store
/*
const store = createStoreWithFirebase(rootReducer, initialState, compose(
  reactReduxFirebase(firebase),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
*/

/*
const rrfProps = {
  firebase,
  config: rrfConfig,
  dispatch: store.dispatch,
  // createFirestoreInstance // <- needed if using firestore
};
*/


export default store;
