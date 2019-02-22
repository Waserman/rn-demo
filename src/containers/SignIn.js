import React from "react";
import { StyleSheet, Text, View, TouchableHighlight, AsyncStorage} from "react-native";

export default class SignIn extends React.Component {

  submitLogin = async () => {
    //TODO use navigation API to enter appStack
    await AsyncStorage.setItem('k-token', 'secret-token');
    this.props.navigation.navigate('gateway');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>SignIn page</Text>
        <TouchableHighlight style={styles.signInButton} onPress={this.submitLogin}>
          <Text>Sign In</Text>
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
  },

  signInButton: {
    borderColor: 'black',
    marginTop: 10,
  }
});
