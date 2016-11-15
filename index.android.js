/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import * as firebase from 'firebase';
const ListItem = require('./components/ListItem');

import React, { Component } from 'react';
import ReactNative from 'react-native';

const {
  AppRegistry,
  ListView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  AlertIOS,
} = ReactNative;


const firebaseConfig = {
  apiKey: "AIzaSyBZ8zHRpMEHzutHaN6sBxNgvW6gtOVcNLA",
  authDomain: "winapp-1459a.firebaseapp.com",
  databaseURL: "https://winapp-1459a.firebaseio.com",
  storageBucket: "winapp-1459a.appspot.com",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

export default class WINApp extends Component {

  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.resourcesRef = this.getRef().child('resources');
  }

  getRef(){
    return firebaseApp.database().ref();
  }

  listenForResources(resourcesRef){
    resourcesRef.on('value', (snap) => {
      console.log("snap is " + snap);
      var resources = [];
      snap.forEach((child) => {
        resources.push({
          title: child.val().title,
          _key: child.key
        });
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(resources)
      });
    });
  }

  componentDidMount(){
    this.listenForResources(this.resourcesRef);
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView dataSource={this.state.dataSource} renderRow={this._renderResource.bind(this)} enableEmptySections={true} style={styles.listView} />
      </View>
    );
  }

  _renderResource(resource) {
    const onPress = () => {
      Alert.alert('resource has been pressed!');
    };

    return (<ListItem item={resource} onPress={onPress} />);
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  listView: {
    flex:1,
    backgroundColor:'#ffffff'
  },
});



AppRegistry.registerComponent('WINApp', () => WINApp);
