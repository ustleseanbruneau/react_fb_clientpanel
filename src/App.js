import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { UserIsAuthenticated, UserIsNotAuthenticated } from './helpers/auth'
 
import { Provider } from 'react-redux'
import store from './store'

import firebase from 'firebase/app';
import 'firebase/firestore';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import { createFirestoreInstance } from 'redux-firestore'

import AppNavbar from './components/layout/AppNavbar'
import Dashboard from './components/layout/Dashboard'
import AddClient from './components/clients/AddClient'
import ClientDetails from './components/clients/ClientDetails'
import EditClient from './components/clients/EditClient'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Settings from './components/settings/Settings'

function App() {

  //  Init firestore
  //const firestore = firebase.firestore();

  // react-redux-firebase config
  const rrfConfig = {
    //userProfile: 'users',
    userProfile: null,
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
                <Route exact path="/" component={UserIsAuthenticated(Dashboard)} />
                <Route exact path="/client/add" component={UserIsAuthenticated(AddClient)} />
                <Route exact path="/client/edit/:id" component={UserIsAuthenticated(EditClient)} />
                <Route exact path="/client/:id" component={UserIsAuthenticated(ClientDetails)} />
                <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
                <Route exact path="/register" component={UserIsNotAuthenticated(Register)} />
                <Route exact path="/settings" component={UserIsAuthenticated(Settings)} />
              </Switch>
            </div>
          </div>
        </Router>
      </ReactReduxFirebaseProvider>
    </Provider>
  );
}

export default App;
