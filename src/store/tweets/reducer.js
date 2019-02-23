import { combineReducers } from "redux";
import {
  LOAD_TWEETS,
  LOAD_TWEETS_SUCCESS,
  TWEET_UPVOTE,
  TWEET_DOWNVOTE
} from "./types";

const loading = (state = false, action) => {
  switch (action.type) {
    case LOAD_TWEETS:
      return true;
    case LOAD_TWEETS_SUCCESS:
      return false;
    default:
      return state;
  }
};

const data = (state = null, action) => {
  let tweet;
  switch (action.type) {
    case LOAD_TWEETS_SUCCESS:
      return action.tweets;
    case TWEET_UPVOTE:
      tweet = state[action.id];
      return {
        ...state,
        [action.id]: {
          ...tweet,
          upvote: tweet.upvote + 1
        }
      };
    case TWEET_DOWNVOTE:
      tweet = state[action.id];
      return {
        ...state,
        [action.id]: {
          ...tweet,
          downvote: tweet.downvote + 1
        }
      };
    default:
      return state;
  }
};

export default combineReducers({ loading, data });
