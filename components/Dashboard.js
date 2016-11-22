import * as firebase from 'firebase';
import React, { Component } from 'react';
import ReactNative from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
const CategoryListItem = require('../components/CategoryListItem');

const { View, ToolbarAndroid, Text, StyleSheet, ListView, Alert, Navigator} = ReactNative;
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
        dataSource: this.state.dataSource.cloneWithRows(categories)
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

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid style={styles.toolbar}
                        navIcon={{uri:"ic_menu_white_24dp"}}
                        title="What I Need"
                        onIconClicked={this.props.navigator.pop}
                        actions={[{title: 'Feedback', icon: {uri:"ic_feedback_white_24dp"}, show: 'always', showWithText:true}]}
                        titleColor={'#FFFFFF'}/>
        <ListView dataSource={this.state.dataSource} renderRow={this._renderCategory.bind(this)} enableEmptySections={true} style={styles.listView} />
        <ActionButton
            buttonColor="#FF5252"
            offsetX={16}
            offsetY={0}
            onPress={() => { console.log("search button tapped")}}
            icon={<Icon name="search" size={30} color="#FFFFFF" />}
        />
      </View>
    );
  }
  componentDidMount(){
    this.listenForCategories(this.categoriesRef);
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
