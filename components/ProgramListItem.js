import React, {Component} from 'react';
import ReactNative from 'react-native';
const { View, TouchableHighlight, Text, StyleSheet, TouchableNativeFeedback } = ReactNative;

class ProgramListItem extends Component {
  render() {
    var programListItemContent;
    if (typeof this.props.item.nameofprogram != 'undefined'){
      programListItemContent = <View style={styles.containerView}><Text style={styles.asideText}>2.3 mi</Text><View style={styles.labelsContainerView}><Text style={styles.opHoursText}>{decodeURIComponent(this.props.item.ophours)}</Text><Text style={styles.titleText}>{decodeURIComponent(this.props.item.nameofprogram)}</Text><Text style={styles.subtitleText}>{decodeURIComponent(this.props.item.nameofagency)}</Text><Text style={styles.bodyText}>{decodeURIComponent(this.props.item.shortdescription)}</Text></View><View style={styles.separator}></View></View>
    }
    else{
      programListItemContent = <View style={styles.containerView}><Text style={styles.asideText}>2.3 mi</Text><View style={styles.labelsContainerView}><Text style={styles.opHoursText}>{decodeURIComponent(this.props.item.ophours)}</Text><Text style={styles.titleText}>{decodeURIComponent(this.props.item.nameofagency)}</Text><Text style={styles.bodyText}>{decodeURIComponent(this.props.item.shortdescription)}</Text></View><View style={styles.separator}></View></View>
    }
    return (
      <TouchableNativeFeedback onPress={this.props.onPress}>        
        {programListItemContent}
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  labelsContainerView:{
    flex:1,
    flexDirection:'column',
    alignItems:'flex-start',
    margin:16,
  },
  containerView:{    
  },
  asideText:{
    fontSize:12,
    color:'rgba(0,0,0,0.87)',
    position:'absolute',
    right:16,
    top:11,
  },
  opHoursText:{
    fontSize:12,
    color:'#FF5252',
    marginRight:40,
    marginBottom:4,
  },
  titleText:{
    fontSize:16,
    fontWeight:"500",
    color:'rgba(0,0,0,0.87)',
  },
  subtitleText:{
    fontSize:14,
    color:'rgba(0,0,0,0.87)',
    marginBottom:3,
  },
  bodyText:{
    fontSize:16,
    color:'rgba(0,0,0,0.54)',
  },
  separator:{
    backgroundColor: 'rgba(0,0,0,0.12)',
    height:1,
  }
});

module.exports = ProgramListItem;
