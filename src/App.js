import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { Provider } from 'react-redux'
import store from './store'

import firebase from 'firebase/app';
import 'firebase/firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

import AppNavbar from './components/layout/AppNavbar'
import Dashboard from './components/layout/Dashboard'

function App() {

  //  Init firestore
  //const firestore = firebase.firestore();

  // react-redux-firebase config
  const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true  //Firestore for Profile instead of Realtime DB
  }

  const rrfProps = {
    firebase,
    config: rrfConfig,
    dispatch: store.dispatch,
    createFirestoreInstance // <- needed if using firestore
  };

  return (
    <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfProps}>
        <Router>
          <div className="App">
            <AppNavbar />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Dashboard} />
              </Switch>
            </div>
          </div>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
