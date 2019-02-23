import axios from "axios";
import { TWEET_UPVOTE, TWEET_DOWNVOTE, LOAD_TWEETS, LOAD_TWEETS_SUCCESS} from "./types";
import faker from "faker";
import { arrayToObject } from "@utils";

export const upvoteTweet = id => ({ type: TWEET_UPVOTE, id });
export const downvoteTweet = id => ({ type: TWEET_DOWNVOTE, id });

const loadTweets = () => ({ type: LOAD_TWEETS });
const loadTweetsSuccess = tweets => ({ type: LOAD_TWEETS_SUCCESS, tweets });
export const loadTweetsApi = () => dispatch => {
  dispatch(loadTweets());
  try {
    const tweets = new Array(10).fill(null).map(async e => ({
      userName: await faker.name.firstName(),
      userLastName: await faker.name.lastName(),
      avatar: await faker.image.avatar(),
      id: await faker.random.uuid(),
      tweet: await faker.lorem.sentence(),
      upvote: Math.floor(Math.random() * 10) + 1,
      downvote: Math.floor(Math.random() * 10) + 1,
    }));

    dispatch(loadTweetsSuccess(arrayToObject(tweets, "id")));
  } catch (ex) {
    console.warn(
      "could not load data - might be an error with loadTweets API call"
    );
  }
};
