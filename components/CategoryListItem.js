import React, {Component} from 'react';
import ReactNative from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { View, TouchableHighlight, Text, StyleSheet, TouchableNativeFeedback, Image } = ReactNative;

class CategoryListItem extends Component {
  render() {
    var iconDictionary = {};
    iconDictionary['Shelter'] = <Icon name='hotel' size={18} color="rgba(255,255,255,1)" />;
    iconDictionary['Crisis Handling'] = <Icon name='whatshot' size={18} color="rgba(255,255,255,1)" />;
    iconDictionary['Food'] = <Icon name='restaurant' size={18} color="rgba(255,255,255,1)" />;
    iconDictionary['Drop-in Service'] = <Icon name='device-hub' size={18} color="rgba(255,255,255,1)" />;
    iconDictionary['Health'] = <Icon name='local-hospital' size={18} color="rgba(255,255,255,1)" />;
    iconDictionary['Legal'] = <Icon name='account-balance' size={18} color="rgba(255,255,255,1)" />;
    iconDictionary['Hotline'] = <Icon name='call' size={18} color="rgba(255,255,255,1)" />;
    iconDictionary['Education'] = <Icon name='school' size={18} color="rgba(255,255,255,1)" />;
    iconDictionary['Job Service'] = <Icon name='work' size={18} color="rgba(255,255,255,1)" />;
    iconDictionary['Transportation'] = <Icon name='directions-bus' size={18} color="rgba(255,255,255,1)" />;
    iconDictionary['Benefits Assistance'] = <Icon name='assistant' size={18} color="rgba(255,255,255,1)" />;
    iconDictionary['More'] = <Icon name='more-horiz' size={18} color="rgba(255,255,255,1)" />;
    
    var colorDictionary = {};
    colorDictionary['Shelter'] = 'rgba(26, 204, 204, 1.00)';
    colorDictionary['Crisis Handling'] = 'rgba(246, 120, 65, 1.00)';
    colorDictionary['Food'] = 'rgba(113, 112, 238, 1.00)';
    colorDictionary['Drop-in Service'] = 'rgba(232, 183, 80, 1.00)';
    colorDictionary['Health'] = 'rgba(119, 180, 77, 1.00)';
    colorDictionary['Legal'] = 'rgba(26, 172, 202, 1.00)';
    colorDictionary['Hotline'] = 'rgba(234, 115, 210, 1.00)';
    colorDictionary['Education'] = 'rgba(251, 149, 87, 1.00)';
    colorDictionary['Job Service'] = 'rgba(21, 126, 18, 1.00)';
    colorDictionary['Transportation'] = 'rgba(176, 226, 45, 1.00)';
    colorDictionary['Benefits Assistance'] = 'rgba(44, 147, 225, 1.00)';
    colorDictionary['More'] = 'rgba(227, 201, 52, 1.00)';

    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={styles.containerView}>
          <View style={{width: 40, height: 40, borderRadius:20, backgroundColor:colorDictionary[this.props.item.title], alignItems:'center', justifyContent:'center'}}>{iconDictionary[this.props.item.title]}</View>
          <Text style={styles.singleLineText}>{this.props.item.title}</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor: '#FFFFFF',
    paddingTop: 8,
    paddingBottom:8,
    paddingLeft:16,
    paddingRight:16,
    minHeight:56,
  },
  singleLineText:{
      fontSize: 16,
      marginLeft:16,
  },
});


module.exports = CategoryListItem;
