import React from "react";
import { SafeAreaView } from "react-native";
import { Provider } from "react-redux";
import {
  createStackNavigator,
  createSwitchNavigator,
  createAppContainer
} from "react-navigation";
import AuthGateway from "./src/containers/AuthGateway";
import Loader from "./src/containers/Loader";
import SignIn from "./src/containers/SignIn";
import TweetsList from "./src/containers/TweetsList";
import TweetDetails from "./src/containers/TweetDetails";
import HeaderLeft from "./src/components/HeaderLeft";
import configureStore from './src/store/configureStore';

const authStack = createStackNavigator({ SignIn: SignIn });
const appStack = createStackNavigator({
  TweetsList: TweetsList,
  TweetDetails: TweetDetails
});

const AppContainer = createAppContainer(
  createSwitchNavigator(
    {
      auth: authStack,
      app: appStack,
      loader: Loader,
      gateway: AuthGateway
    },
    { initialRouteName: "gateway" }
  )
);

const store = configureStore();

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView style={{ flex: 1 }}>
          <AppContainer />
        </SafeAreaView>
      </Provider>
    );
  }
}
