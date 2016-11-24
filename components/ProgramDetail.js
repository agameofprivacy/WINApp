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
        rowData.push({title:this.props.passProps.program.nameofprogram, subtitle:this.props.passProps.program.nameofagency, header:true});
    }
    else{
        rowData.push({title:this.props.passProps.program.nameofagency, header:true});
    }
    if (typeof this.props.passProps.program.ophours !== 'undefined'){
        rowData.push({subtitle:this.props.passProps.program.ophours, image:'access-time', title:'Hours Open'});
    }
    if (typeof this.props.passProps.program.ContactPhone !== 'undefined'){
        var phoneContactName = "Contact Phone";
        if (typeof this.props.passProps.program.ContactName !== 'undefined'){
            phoneContactName = this.props.passProps.program.ContactName;
        }
        var phoneIndex = 0
        var phoneNumberArray = [];
        var phoneNameArray = [];
        for (var phoneNumber in decodeURIComponent(this.props.passProps.program.ContactPhone).split("\n")){
            phoneNumberArray.push(decodeURIComponent(this.props.passProps.program.ContactPhone).split("\n")[phoneNumber]);
        }
        for (var phoneName in decodeURIComponent(phoneContactName).split("\n")){
            phoneNameArray.push(decodeURIComponent(phoneContactName).split("\n")[phoneName]);
        }
        var count = 0;
        for (var index in phoneNumberArray){
            var phoneNumber = decodeURIComponent(this.props.passProps.program.ContactPhone).split("\n")[index];
            var phoneName = decodeURIComponent(phoneContactName).split("\n")[index];
            if (phoneName === "NIL" || typeof phoneName === "undefined"){
                phoneName = "Contact Phone";
            }
            if (phoneNumber !== "NIL" && typeof phoneNumber !== 'undefined'){
                if (count === 0){
                    rowData.push({subtitle:phoneNumber, image:'phone', title:phoneName});
                }
                else{
                    rowData.push({subtitle:phoneNumber, title:phoneName});
                }
                count += 1;
            }
        }       
    }
    var addressline1 = this.props.passProps.program.addressline1;
    var addressline2 = this.props.passProps.program.addressline2;
    var city = this.props.passProps.program.city;
    var state = this.props.passProps.program.state;
    var zip = this.props.passProps.program.zip;
    var lat = this.props.passProps.program.lat;
    var lon = this.props.passProps.program.lon;

    var placeTitleString = "";
    var placeSubtitleString = "";
    if (typeof addressline1 !== 'undefined' && decodeURIComponent(addressline1).toUpperCase() !== "NULL"){
        placeTitleString += decodeURIComponent(addressline1);
    }
    if (typeof addressline2 !== 'undefined' && decodeURIComponent(addressline2).toUpperCase() !== "NULL"){
        placeSubtitleString += " " + decodeURIComponent(addressline2);
    }
    if (typeof city !== 'undefined' && decodeURIComponent(city).toUpperCase() !== "NULL"){
        if (placeSubtitleString !== ""){
            placeSubtitleString += ", ";
        }
        placeSubtitleString += decodeURIComponent(city);
    }
    if (typeof state !== 'undefined' && decodeURIComponent(state).toUpperCase() !== "NULL"){
        if (placeSubtitleString !== ""){
            placeSubtitleString += ", ";
        }
        placeSubtitleString += decodeURIComponent(state);
    }
    if (typeof zip !== 'undefined' && decodeURIComponent(zip).toUpperCase() !== "NULL"){
        if (placeSubtitleString !== ""){
            placeSubtitleString += ", ";
        }
        placeSubtitleString += decodeURIComponent(zip);
    }

    if (placeTitleString !== "" || placeSubtitleString !== ""){
        if (placeSubtitleString === "" && placeTitleString !== ""){
            rowData.push({subtitle:placeTitleString, image:'place', title:"Location"});
        }
        else{
            rowData.push({subtitle:placeSubtitleString, image:'place', title:placeTitleString});
        }
    }
    if (typeof this.props.passProps.program.Website !== 'undefined' && decodeURIComponent(this.props.passProps.program.Website).toUpperCase() !== "NULL"){
        rowData.push({subtitle:decodeURIComponent(this.props.passProps.program.Website), image:'link', title:"Website"});
    }
    if (typeof this.props.passProps.program.websitealt1 !== 'undefined' && decodeURIComponent(this.props.passProps.program.websitealt1).toUpperCase() !== "NULL"){
        rowData.push({subtitle:decodeURIComponent(this.props.passProps.program.websitealt1), title:"Alternative Website"});
    }
    if (typeof this.props.passProps.program.websitealt2 !== 'undefined' && decodeURIComponent(this.props.passProps.program.websitealt2).toUpperCase() !== "NULL"){
        rowData.push({subtitle:decodeURIComponent(this.props.passProps.program.websitealt2), title:"Alternative Website"});
    }
    if (typeof this.props.passProps.program.nameofagency !== 'undefined' && decodeURIComponent(this.props.passProps.nameofagency).toUpperCase()!== "NULL"){
        rowData.push({subtitle:decodeURIComponent(this.props.passProps.program.nameofagency), title:"Agency's Other Programs", image:'list'});
    }
    var populationsServed = [];
    if (typeof this.props.passProps.program[encodeURIComponent("Foster Youth: Specialty")] !== 'undefined' && decodeURIComponent(this.props.passProps.program[encodeURIComponent("Foster Youth: Specialty")]) === "Foster Youth: Specialty"){
        populationsServed.push("Foster Youth");
    }
    if (typeof this.props.passProps.program[encodeURIComponent("LGBTQ: Specialty")] !== 'undefined' && decodeURIComponent(this.props.passProps.program[encodeURIComponent("LGBTQ: Specialty")]) === "LGBTQ: Specialty"){
        populationsServed.push("LGBTQ");
    }
    if (typeof this.props.passProps.program[encodeURIComponent("Veterans: Specialty")] !== 'undefined' && decodeURIComponent(this.props.passProps.program[encodeURIComponent("Veterans: Specialty")]) === "Veterans: Specialty"){
        populationsServed.push("Veterans");
    }
    // if (populationsServed.length > 0){
    //     var populationsServedSubtitleString = "";
    //     for (var pop in populationsServed){
    //         if (pop != 0){
    //             populationsServedSubtitleString += ', ';
    //         }
    //         populationsServedSubtitleString += populationsServed[pop];
    //     }
    //     rowData.push({subtitle:populationsServedSubtitleString, image:'info', title:"Population Served"});
    // }
    if (typeof this.props.passProps.program.populationserved !== "undefined" && decodeURIComponent(this.props.passProps.program.populationserved).toUpperCase() !== "NULL"){
        rowData.push({subtitle:decodeURIComponent(this.props.passProps.program.populationserved), image:'info', title:"Population Served"});
    }
    if (typeof this.props.passProps.program.fromage !== "undefined" && typeof this.props.passProps.program.fromage !== "undefined"){
        rowData.push({subtitle:"" + this.props.passProps.program.fromage + " to " + this.props.passProps.program.toage, title:"Age"});
    }
    if (typeof this.props.passProps.program.Languages !== 'undefined' && decodeURIComponent(this.props.passProps.program.Languages).toUpperCase() !== "NULL"){
        var languagesString = decodeURIComponent(this.props.passProps.program.Languages);
        if (languagesString.charAt(languagesString.length - 1) === ','){
            languagesString = languagesString.substring(0, languagesString.length - 1);
        }
        rowData.push({subtitle:languagesString, title:"Languages"});
    }

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

    if (typeof props.header !== 'undefined'){
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
