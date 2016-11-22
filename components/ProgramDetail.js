import * as firebase from 'firebase';
import React, { Component } from 'react';
import ReactNative from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/MaterialIcons';
const InfoListItem = require('../components/InfoListItem.js');
const InfoHeaderListItem = require('../components/InfoHeaderListItem.js');

const { View, ToolbarAndroid, Text, StyleSheet, ListView, Alert, Navigator} = ReactNative;
class ProgramDetail extends React.Component{

  constructor(props){
    super(props);
    var rowData = [];
    if (typeof this.props.passProps.program.nameofprogram !== 'undefined'){
        rowData.push({title:this.props.passProps.program.nameofprogram, subtitle:this.props.passProps.program.nameofagency});
    }
    else{
        rowData.push({title:this.props.passProps.program.nameofagency});
    }
    rowData.push({opHours:this.props.passProps.program.opHours});
    console.log(rowData);
    this.state = {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }).cloneWithRows(rowData),
    };
  }

  _renderRow(props) {
    const onPress = () => {
        console.log("row tapped")
    };
    console.log("title is" + props.title);

    if (typeof props.title !== 'undefined'){
        return (<InfoHeaderListItem item={props} onPress={onPress} />);    
    }
    else{
        return (<InfoListItem item={props} onPress={onPress} />);
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <ToolbarAndroid style={styles.toolbar}
                        navIcon={{uri:"ic_arrow_back_white_24dp"}}
                        title=""
                        onIconClicked={this.props.navigator.pop}
                        actions={[{title: 'Share', icon: {uri:"ic_share_white_24dp"}, show: 'always', showWithText:true}]}
                        titleColor={'#FFFFFF'}/>
        <ListView automaticallyAdjustContentInsets={false} dataSource={this.state.dataSource} renderRow={this._renderRow} style={styles.listView} removeClippedSubviews={false}/>
        <ActionButton
            buttonColor="#FF5252"
            offsetX={16}
            offsetY={0}
            onPress={() => { console.log("search button tapped")}}
            icon={<Icon name="star-border" size={30} color="#FFFFFF" />}
        />
      </View>
    );
  }
  componentDidMount(){
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
    backgroundColor:'#ffffff',
    
  },
});

module.exports = ProgramDetail;
