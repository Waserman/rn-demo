import React from "react";
import { StyleSheet, Text, View, AsyncStorage } from "react-native";

export default class AuthGateway extends React.Component {
  componentDidMount() {
    this.isAuth();
  }

  isAuth = async () => {
    const token = await AsyncStorage.getItem("k-token");
    this.props.navigation.navigate(token ? "loader" : "auth");
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>AuthGateway</Text>
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
