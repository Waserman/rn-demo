import React from "react";
import { StyleSheet, Text, View, TouchableHighlight } from "react-native";

export default class MoviesList extends React.Component {

  static navigationOptions = {
    title: 'Tweets',
  };

  viewTweet = () => {
    this.props.navigation.navigate('MovieDetails');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>MoviesList</Text>
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
