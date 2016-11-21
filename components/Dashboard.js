import * as firebase from 'firebase';
import React, { Component } from 'react';
import ReactNative from 'react-native';

const ListItem = require('../components/ListItem');

const { View, ToolbarAndroid, Text, StyleSheet, ListView, Alert} = ReactNative;
class Dashboard extends React.Component{

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

  _renderResource(resource) {
    const onPress = () => {
      Alert.alert('resource has been pressed!');
    };

    return (<ListItem item={resource} onPress={onPress} />);
  }
  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid style={styles.toolbar}
                        navIcon={{uri:"ic_menu_white_24dp"}}
                        title="Dashboard"
                        onIconClicked={this.props.navigator.pop}
                        actions={[{title: 'Feedback', icon: {uri:"ic_feedback_white_24dp"}, show: 'always', showWithText:true}]}
                        titleColor={'#FFFFFF'}/>
        <ListView dataSource={this.state.dataSource} renderRow={this._renderResource.bind(this)} enableEmptySections={true} style={styles.listView} />

      </View>
    );
  }
  componentDidMount(){
    this.listenForResources(this.resourcesRef);
  }

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  toolbar: {
    backgroundColor:'#009688',
    height:56,
  },
  listView: {
    flex:1,
    backgroundColor:'#ffffff'
  },
});

module.exports = Dashboard;
