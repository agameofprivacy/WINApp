/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as firebase from 'firebase';
const Dashboard = require('./components/Dashboard');

import React, { Component } from 'react';
import ReactNative from 'react-native';

const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert,
  Navigator,
  ToolbarAndroid,
} = ReactNative;


const firebaseConfig = {
  apiKey: "AIzaSyBZ8zHRpMEHzutHaN6sBxNgvW6gtOVcNLA",
  authDomain: "winapp-1459a.firebaseapp.com",
  databaseURL: "https://winapp-1459a.firebaseio.com",
  storageBucket: "winapp-1459a.appspot.com",
};

global.firebaseApp = firebase.initializeApp(firebaseConfig);

export default class WINApp extends Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Navigator style={styles.container} initialRoute={{id:"dashboard"}} renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    _navigator = navigator;
    switch (route.id) {
      case 'dashboard':
        return (<Dashboard navigator={navigator} title="dashboard"/>);
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});

module.exports = WINApp;

AppRegistry.registerComponent('WINApp', () => WINApp);