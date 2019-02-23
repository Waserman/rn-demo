import React from "react";
import { SafeAreaView } from "react-native";
import { createStackNavigator, createSwitchNavigator, createAppContainer } from 'react-navigation';
import AuthGateway from './src/containers/AuthGateway';
import Loader from './src/containers/Loader';
import SignIn from './src/containers/SignIn';
import MoviesList from './src/containers/MoviesList';
import MovieDetails from './src/containers/MovieDetails';
import HeaderLeft from './src/components/HeaderLeft';

const authStack = createStackNavigator({ SignIn: SignIn });
const appStack = createStackNavigator({ MoviesList: MoviesList, MovieDetails: MovieDetails });

const AppContainer = createAppContainer(createSwitchNavigator({
  auth: authStack,
  app: appStack,
  loader: Loader,
  gateway: AuthGateway,
}, { initialRouteName: 'gateway'}));

export default class App extends React.Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <AppContainer />
      </SafeAreaView>
    );
  }
}