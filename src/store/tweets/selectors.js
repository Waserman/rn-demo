import { createSelector } from 'reselect';

const getTweets = state => state.tweets.data;

export const tweetsSelector = createSelector(
  getTweets,
  (data) => {
    if (!data) return [];
    return Object.values(data);
  }
);