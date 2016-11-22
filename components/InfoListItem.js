import React, {Component} from 'react';
import ReactNative from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { View, TouchableHighlight, Text, StyleSheet, TouchableNativeFeedback, Image } = ReactNative;

class InfoListItem extends Component {
  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={styles.containerView}>
            <Icon name="access-time" size={24} color="rgba(0,0,0,0.54)" />
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


module.exports = InfoListItem;
