import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";

export default (Card = ({ avatar, fullName, tweet }) => {
  return (
    <View style={styles.cardContainer} >
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={{ uri: avatar }} />
      </View>
      <View>
        <Text style={styles.name}>{fullName}</Text>
        <Text style={styles.tweet}>{tweet}</Text>
      </View>
    </View>
  );
});

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#fff",
    shadowColor: "#ededed",
    shadowOffset: { width: 5, height: 7},
    shadowOpacity: 10,
    borderRadius: 10
  },
  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 25,
    marginRight: 10
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25
  },
  name: {
    fontSize: 16,
    fontWeight: "bold"
  },
  tweet: {
    maxWidth: "90%"
  }
});
