import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";
import HeaderLeft from '../components/HeaderLeft';
export default class TweetsList extends React.Component {

  static navigationOptions = {
    title: 'Tweets',
    headerLeft: (
      <HeaderLeft />
    )
  };

  viewTweet = () => {
    this.props.navigation.navigate('MovieDetails');
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
