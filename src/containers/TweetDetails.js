import React from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

export default class TweetDetails extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Text>TweetDetails</Text>
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
