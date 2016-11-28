import * as firebase from 'firebase';
import React, { Component } from 'react';
import ReactNative from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Dimensions from 'Dimensions';
const CategoryListItem = require('../components/CategoryListItem');

const { View, ToolbarAndroid, Text, StyleSheet, ListView, Alert, Navigator, ActivityIndicator, DrawerLayoutAndroid} = ReactNative;
class Dashboard extends React.Component{


  constructor(props){
    super(props);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      })
    };
    this.categoriesRef = this.getRef().child('categories');
  }

  getRef(){
    return firebaseApp.database().ref();
  }

  listenForCategories(categoriesRef){
    categoriesRef.on('value', (snap) => {
      var categories = [];
      snap.forEach((child) => {
        categories.push({
          title: child.val().title,
          _key: child.key
        });
      });
      this.setState({
        dataSource: this.state.dataSource.cloneWithRows(categories),
        animating:false
      });
    });
  }

  _renderCategory(category) {
    const onPress = () => {
      this.props.navigator.push({
        id: 'programsList',
        passProps: {
          title:category.title,
        },
      });
    };
    return (<CategoryListItem item={category} onPress={onPress} />);
  }
  
  openDrawer = () => {
    this.refs['DRAWER'].openDrawer()
  }

  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10, fontSize: 15, textAlign: 'left'}}>What I Need</Text>
      </View>
    );

    return (
      <DrawerLayoutAndroid
              drawerWidth={300}
              ref={'DRAWER'}
              drawerPosition={DrawerLayoutAndroid.positions.Left}
              renderNavigationView={() => navigationView}>
        <View style={styles.container}>
          <View style={styles.fullScreen}>
            <ToolbarAndroid style={styles.toolbar}
                            navIcon={{uri:"ic_menu_white_24dp"}}
                            title="Dashboard"
                            onIconClicked={this.openDrawer}
                            actions={[{title: 'Feedback', icon: {uri:"ic_feedback_white_24dp"}, show: 'always', showWithText:true}]}
                            titleColor={'#FFFFFF'}/>
            <ListView dataSource={this.state.dataSource} renderRow={this._renderCategory.bind(this)} enableEmptySections={true} style={styles.listView} />
          </View>
          <View style={styles.floatView}>
            <ActivityIndicator
              animating={this.state.animating}
              style={[styles.activityIndicator]}
              size="large"
            />
          </View>
          <ActionButton
              buttonColor="#FF5252"
              offsetX={16}
              offsetY={0}
              onPress={() => { console.log("search button tapped")}}
              icon={<Icon name="search" size={30} color="#FFFFFF" />}
          />
        </View>
      </DrawerLayoutAndroid>
    );
  }
  componentDidMount(){
    this.listenForCategories(this.categoriesRef);
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

module.exports = Dashboard;
