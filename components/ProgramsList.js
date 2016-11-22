import * as firebase from 'firebase';
import React, { Component } from 'react';
import ReactNative from 'react-native';

const ProgramListItem = require('../components/ProgramListItem.js');

const { View, ToolbarAndroid, Text, StyleSheet, ListView, Alert} = ReactNative;
class ProgramsList extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.programsRef = this.getRef().child('programs');
  }

  getRef(){
    return firebaseApp.database().ref();
  }

  listenForPrograms(programsRef){
    programsRef.orderByChild(encodeURIComponent(this.props.passProps.title)).equalTo(encodeURIComponent(this.props.passProps.title)).on('value', (snap) => {
      var programs = [];
      snap.forEach((child) => {
        programs.push({
          nameofagency: child.val().nameofagency,
          ophours: child.val().ophours,
          nameofprogram: child.val().nameofprogram,
          shortdescription: child.val().shortdescription,
          _key: child.key
        });
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(programs)
      });
    });
  }

  _renderProgram(program) {
    const onPress = () => {
      this.props.navigator.push({
        id: 'programDetail',
        passProps: {
          program:program,
        },
      });
    };
    return (<ProgramListItem item={program} onPress={onPress} />);
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid style={styles.toolbar}
                        navIcon={{uri:"ic_arrow_back_white_24dp"}}
                        title={this.props.passProps.title}
                        onIconClicked={this.props.navigator.pop}
                        actions={[{title: 'Filter', icon: {uri:"ic_filter_list_white_24dp"}, show: 'always', showWithText:true}]}
                        titleColor={'#FFFFFF'}/>
        <ListView dataSource={this.state.dataSource} renderRow={this._renderProgram.bind(this)} enableEmptySections={true} style={styles.listView} />
      </View>
    );
  }

  componentDidMount(){
    this.listenForPrograms(this.programsRef);
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

module.exports = ProgramsList;
