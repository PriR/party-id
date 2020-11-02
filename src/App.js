import React, {View, Text, useEffect} from 'react';
import Router from './routes/Router';
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';
import AuthContext from './context/auth-context'; // aq

if (__DEV__) {
  import('../ReactotronConfig').then(() =>
    console.log('Reactotron Configured'),
  );
}

const App = () => {
  var firebaseConfig = {
    authDomain: 'party-id.firebaseio.com',
    databaseURL: 'https://party-id.firebaseio.com',
    projectId: 'party-id',
  };

  firebase.initializeApp(firebaseConfig);

  // useEffect(() => {
  //   remoteConfig()
  //     .setDefaults({
  //       awesome_new_feature: 'disabled',
  //     })
  //     .then(() => {
  //       console.log('Default values set.');
  //     });
  // }, []);
  // return <Router />;

  // provider
  return (
    <View>
      <View>
        <Text>lalalal</Text>
      </View>
      <AuthContext.Provider
        value={{
          authenticated: this.state.authenticated,
          login: this.loginHandler,
        }}
      />
    </View>
  );

  // consumer
  return (
    <AuthContext.Consumer>
      {(context) => {this.props.isAuth ? <p>Authenticated</p> : <p>Please Login!</p>}}
    </AuthContext.Consumer>
  );
};

export default App;
