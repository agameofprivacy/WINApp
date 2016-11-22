import React, {Component} from 'react';
import ReactNative from 'react-native';

const { View, TouchableHighlight, Text, StyleSheet, TouchableNativeFeedback, Image } = ReactNative;

class InfoHeaderListItem extends Component {
  render() {
    var subtitle;
    if (typeof this.props.item.subtitle !== 'undefined'){
        subtitle = <Text style={styles.infoHeaderSubtitleText}>{decodeURIComponent(this.props.item.subtitle)}</Text>
    }
    else{
    }
    return (
        <View style={styles.containerView}>
            <Text style={styles.infoHeaderTitleText}>{decodeURIComponent(this.props.item.title)}</Text>
            {subtitle}
        </View>
    );
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    flexDirection: 'column',
    alignItems:'flex-start',
    backgroundColor: '#009688',
    paddingBottom:45,
  },
  infoHeaderTitleText:{
      fontFamily: 'sans-serif-condensed',
      fontSize: 30,
      marginLeft:16,
      marginRight:16,
      marginBottom:4,
      marginTop:32,
      color:'#FFFFFF',
  },
  infoHeaderSubtitleText:{
      color:'rgba(255,255,255,0.54)',
      fontSize:16,
      fontFamily: 'sans-serif-condensed',
      marginLeft:16,
      marginRight:16,
  },
});


module.exports = InfoHeaderListItem;
