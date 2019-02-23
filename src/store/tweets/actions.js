import axios from "axios";
import {
  TWEET_UPVOTE,
  TWEET_DOWNVOTE,
  LOAD_TWEETS,
  LOAD_TWEETS_SUCCESS
} from "./types";
import faker from "faker";
import { arrayToObject } from "@utils";

export const upvoteTweet = id => ({ type: TWEET_UPVOTE, id });
export const downvoteTweet = id => ({ type: TWEET_DOWNVOTE, id });

const loadTweets = () => ({ type: LOAD_TWEETS });
const loadTweetsSuccess = tweets => ({ type: LOAD_TWEETS_SUCCESS, tweets });
export const loadTweetsApi = () => dispatch => {
  dispatch(loadTweets());
  try {
    const tweets = new Array(10).fill(null).map( e => {
      const userName = faker.name.firstName();
      const userLastName = faker.name.lastName();
      const avatar = faker.image.avatar();
      const id = faker.random.uuid();
      const tweet = faker.lorem.sentence();
      const upvote = Math.floor(Math.random() * 10) + 1;
      const downvote = Math.floor(Math.random() * 10) + 1;
      return {
        userName,
        userLastName,
        avatar,
        id,
        tweet,
        upvote,
        downvote
      };
    });
    dispatch(loadTweetsSuccess(arrayToObject(tweets, "id")));
    return Promise.resolve();
  } catch (ex) {
    console.warn(
      "could not load data - might be an error with loadTweets API call"
    );
    return Promise.reject();
  }
};
