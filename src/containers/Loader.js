import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { StyleSheet, Text, View } from "react-native";
import { loadTweetsApi } from '../store/tweets/actions'

class Loader extends React.Component {

  componentDidMount() {
    this.loadData();
  }

  loadData = () => {
    const { loadTweets, navigation } = this.props;
    loadTweets().then(res => {
      navigation.navigate('app');
    }).catch(err => {
      navigation.navigate('auth');
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Loading...</Text>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  loading: state.tweets.loading,
})
const mapDispatchToProps = dispatch => ({
  loadTweets: bindActionCreators(loadTweetsApi, dispatch),
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
