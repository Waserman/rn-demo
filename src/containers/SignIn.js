import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  AsyncStorage,
  Button,
} from "react-native";

export default class SignIn extends React.Component {

  constructor() {
    super();
    this.state = {
      email: '',
      password: ''
    };
  }

  onEmailChange = (email) => this.setState({email});

  onPasswordChange = (password) => this.setState({password});

  submitLogin = async () => {
    await AsyncStorage.setItem("k-token", "secret-token");
    this.props.navigation.navigate("gateway");
  };

  render() {

    const { email, password } = this.state;

    const buttonEnabled = email.length && password.length;
    return (
      <View style={styles.container}>
        <Text style={styles.caption}>WELCOME BACK, CAPTAIN!</Text>
        <TextInput
          style={styles.input}
          placeholderTextColor="#000"
          placeholder="Email"
          textContentType="emailAddress"
          onChangeText={this.onEmailChange}
          keyboardType="email-address" 
        />
        <TextInput
          style={styles.input} 
          placeholderTextColor="#000"
          placeholder="Password"
          textContentType="password"
          onChangeText={this.onPasswordChange}
          secureTextEntry={true}
        />
        <Button title="Get Connected!" disabled={!buttonEnabled} onPress={this.submitLogin}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: 'center',
    paddingRight: 8,
    paddingLeft: 8,
  },
  caption: {
    width: '100%',
    textAlign: 'center',
    color: '#000',
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 20,
    
  },
  input: {
    width: '100%',
    fontSize: 18,
    borderBottomWidth: 0.5,
    borderBottomColor: '#000',
    padding: 5,
    marginBottom: 15,
  }
});
