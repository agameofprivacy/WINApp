import React, {Component} from 'react';
import ReactNative from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const { View, TouchableHighlight, Text, StyleSheet, TouchableNativeFeedback, Image } = ReactNative;

class InfoListItem extends Component {
  render() {
    var imageContent;
    var labelsContainerStyle = styles.labelsContainer;
    if (typeof this.props.item.image !== 'undefined'){
        imageContent = <Icon name={this.props.item.image} size={24} color="rgba(0,0,0,0.54)" />
    }
    else{
        labelsContainerStyle = styles.labelsContainerWithoutImage;
    }
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>
        <View style={styles.containerView}>
            {imageContent}
            <View style={labelsContainerStyle}>
                <Text style={styles.title}>{decodeURIComponent(this.props.item.title)}</Text>
                <Text style={styles.subtitle}>{decodeURIComponent(this.props.item.subtitle)}</Text>
            </View>
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
    paddingTop: 20,
    paddingBottom:20,
    paddingLeft:16,
    paddingRight:16,
    minHeight:88,
  },
  labelsContainer:{
      flex:1,
      flexDirection: 'column',
      alignItems:'flex-start',
  },
  labelsContainerWithoutImage:{
      flex:1,
      flexDirection: 'column',
      alignItems:'flex-start',
      marginLeft:24,
  },
  title:{
      fontSize: 16,
      color:'rgba(0,0,0,0.87)',
      marginLeft:32,
      marginRight:16,
  },
  subtitle:{
      fontSize: 14,
      color:'rgba(0,0,0,0.54)',
      marginLeft:32,
      marginRight:16,
  },
});


module.exports = InfoListItem;
