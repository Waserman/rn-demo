import React from "react";
import { connect } from 'react-redux';
import { StyleSheet, Text, View, TouchableHighlight, FlatList } from "react-native";
import { tweetsSelector } from '../store/tweets/selectors';
import HeaderLeft from '@components/HeaderLeft';
import Card from '@components/Card';
class TweetsList extends React.Component {

  componentDidMount() {
    const { tweets } = this.props;
    // console.log(tweets);
    
  }
  static navigationOptions = {
    title: 'Tweets',
    headerLeft: (
      <HeaderLeft />
    )
  };

  viewTweet = () => {
    this.props.navigation.navigate('TweetDetails');
  }

  keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          style={{ flex: 1, width: "100%"}}
          data={this.props.tweets}
          keyExtractor={this.keyExtractor}
          renderItem={({item}) => (
            <Card tweet={item.tweet} avatar={item.avatar} fullName={`${item.userName} ${item.userLastName}`}/>
            )}
        />
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

const mapStateToProps = state => ({
  tweets: tweetsSelector(state),
})

export default connect(mapStateToProps)(TweetsList);
