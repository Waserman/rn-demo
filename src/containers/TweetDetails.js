import React from "react";
import { connect } from 'react-redux';
import { StyleSheet, Text, View, AsyncStorage, Image, Button } from "react-native";
import { upvoteTweet, downvoteTweet } from '../store/tweets/actions'
class TweetDetails extends React.Component {

  upvote = () => {
    const { tweet: { id } , dispatch} = this.props;
    dispatch(upvoteTweet(id));
  }

  downvote = () => {
    const { tweet: { id }, dispatch } = this.props;
    dispatch(downvoteTweet(id));
  }

  render() {
    const { tweet } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: tweet.avatar }} />
        </View>
        <Text style={styles.name}>{`${tweet.userName} ${tweet.userLastName}`}</Text>
        <Text>{tweet.tweet}</Text>
        <View style={styles.votes}>
          <Text style={styles.up}>Upvotes: {tweet.upvote}</Text>
          <Text style={styles.down}>Downvote: {tweet.downvote}</Text>
        </View>
        <View>
          <Button title="up" onPress={this.upvote}/>
          <Button title="down" onPress={this.downvote}/>
        </View>
      </View>
    );
  }
}



const mapStateToProps = (state, ownProps) => ({
  tweet: state.tweets.data[ownProps.navigation.getParam('tweetId')]
});

export default connect(mapStateToProps)(TweetDetails);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  imageContainer: {
    height: 300,
    width: '100%',
  },
  image: {
    height: 300,
    width: '100%',
  },
  name: {
    width: '100%',
    padding: 10,
    fontWeight: 'bold',
    color: '#000',
    fontSize: 18,
    alignItems: 'flex-start'
  },
  votes: {
    width: '100%',
    padding: 10,
    alignItems: 'flex-start'
  },
  up: { color: 'green'},
  down: {color: 'red'}
});
