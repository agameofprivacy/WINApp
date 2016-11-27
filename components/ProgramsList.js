import * as firebase from 'firebase';
import React, { Component } from 'react';
import ReactNative from 'react-native';
import Dimensions from 'Dimensions';

const ProgramListItem = require('../components/ProgramListItem.js');

const { View, ToolbarAndroid, Text, StyleSheet, ListView, Alert, ActivityIndicator} = ReactNative;
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
        var fosterYouthSpecialtyKey = encodeURIComponent("Foster Youth: Specialty");
        var lgbtqSpecialtyKey = encodeURIComponent("LGBTQ: Specialty");
        var veteransSpecialtyKey = encodeURIComponent("Veterans: Specialty");
        programs.push({
          nameofagency: child.val().nameofagency,
          ophours: child.val().ophours,
          nameofprogram: child.val().nameofprogram,
          shortdescription: child.val().shortdescription,
          ContactPhone: child.val().ContactPhone,
          ContactName: child.val().ContactName,
          addressline1: child.val().addressline1,
          addressline2: child.val().addressline2,
          city: child.val().city,
          state: child.val().state,
          zip: child.val().zip,
          lat: child.val().lat,
          lon: child.val().lon,
          Website: child.val().Website,
          websitealt1: child.val().websitealt1,
          websitealt2: child.val().websitealt2,
          populationserved: child.val().populationserved,
          fromage: child.val().fromage,
          toage: child.val().toage,
          Languages: child.val().Languages,
          description: child.val().description,
          _key: child.key
        });
        programs[programs.length - 1][fosterYouthSpecialtyKey] = child.val()[fosterYouthSpecialtyKey];
        programs[programs.length - 1][lgbtqSpecialtyKey] = child.val()[lgbtqSpecialtyKey];
        programs[programs.length - 1][veteransSpecialtyKey] = child.val()[veteransSpecialtyKey];
      });
      // remove activity indicator
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(programs),
        animating:false
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
        <View style={styles.fullScreen}>
          <ToolbarAndroid style={styles.toolbar}
                  navIcon={{uri:"ic_arrow_back_white_24dp"}}
                  title={this.props.passProps.title}
                  onIconClicked={this.props.navigator.pop}
                  actions={[{title: 'Filter', icon: {uri:"ic_filter_list_white_24dp"}, show: 'always', showWithText:true}]}
                  titleColor={'#FFFFFF'}/>
          <ListView dataSource={this.state.dataSource} renderRow={this._renderProgram.bind(this)} enableEmptySections={true} style={styles.listView} />
        </View>
        <View style={styles.floatView}>
          <ActivityIndicator
            animating={this.state.animating}
            style={[styles.activityIndicator]}
            size="large"
          />
        </View>
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
    backgroundColor: '#FFFFFF',
  },
  toolbar: {
    backgroundColor:'#009688',
    height:56,
  },
  listView: {
    // flex:1,
    backgroundColor:'#ffffff'
  },
  activityIndicator:{
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  floatView:{
    position: 'absolute',
    width: 100,
    height: 100,
    top: Dimensions.get('window').height / 2 - 50,
    left: Dimensions.get('window').width / 2 - 50,
  },
});

module.exports = ProgramsList;
