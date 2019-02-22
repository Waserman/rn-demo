import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Loader extends React.Component {

  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('app');
    }, 2500);
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
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
