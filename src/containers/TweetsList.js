import React from "react";
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import HeaderLeft from '../components/HeaderLeft';
class TweetsList extends React.Component {

  componentDidMount() {
    const { tweets } = this.props;
    // console.log(tweets);
    
  }
  static navigationOptions = {
    title: 'Tweets',
    headerLeft: (
      <HeaderLeft />
    )
  };

  viewTweet = () => {
    this.props.navigation.navigate('TweetDetails');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>TweetsList</Text>
        <TouchableHighlight onPress={this.viewTweet}>
          <Text>Click to view more</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const mapStateToProps = state => ({
  tweets: state.tweets.data,
})

export default connect(mapStateToProps)(TweetsList);
