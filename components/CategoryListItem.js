import React, {Component} from 'react';
import ReactNative from 'react-native';
const { View, TouchableHighlight, Text, StyleSheet, TouchableNativeFeedback, Image } = ReactNative;

class CategoryListItem extends Component {
  render() {
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={styles.containerView}>
            <Image source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}
       style={{width: 40, height: 40, borderRadius:20}} />
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
