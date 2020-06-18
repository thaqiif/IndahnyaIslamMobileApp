import * as React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import {withNavigation} from 'react-navigation';

class Card extends React.Component {

  render(){
    return(
      <View style={[styles.card, {width: this.props.vertical ? '90%' : 300}]}>
        <View style={styles.contentImage}>
        <Image
            key={this.props.thumbnail}
            style={{flex: 1, width: '100%', height: "100%", borderRadius: 10, zIndex: 0}}
            source={{uri: this.props.thumbnail, cache: "force-cache"}}/>
          <View style={[styles.contentImage, {position: "absolute", top: 0, bottom: 0, left: 0, right: 0, backgroundColor: 'rgba(0,0,0,.5)', zIndex: 1}]}/>
          <View style={styles.postInfo}>
            <Text style={styles.postTitle} numberOfLines={3}>{this.props.title}</Text>
            <Text style={styles.postDate} numberOfLines={1}>{this.props.date}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    height: 200,
    marginHorizontal: 4,
    marginVertical: 0,
  },
  contentImage: {
    flex: 1,
    maxHeight: 180,
    borderWidth: 0,
    borderRadius: 10,
    borderColor: '#edeeef',
    position: "relative",
    shadowColor: '#edeeef',
    shadowOffset: {width: 6, height: 6},
    shadowOpacity: 0.5
  },
  postInfo: {
    marginHorizontal: 16,
    marginVertical: 10,
    position: "absolute",
    bottom: 0,
  },
  postTitle: {
      fontSize: 20,
      color: '#fff',
      fontWeight: "400",
      zIndex: 2
  },
  postDate: {
      fontSize: 16,
      color: '#fff',
      zIndex: 2
  }
});

export default withNavigation(Card);