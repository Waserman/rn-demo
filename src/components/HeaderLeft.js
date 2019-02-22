import React from 'react';
import { Button, AsyncStorage } from 'react-native';
import { withNavigation } from 'react-navigation';

const HeaderLeft = (props) => {
  async function logout() {
    await AsyncStorage.removeItem('k-token');
    props.navigation.navigate('gateway');
    
  }
  return (
    <Button title="Logout" onPress={logout}></Button>
  );
}

export default withNavigation(HeaderLeft);