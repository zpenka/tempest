'use strict';

// Tempest Live Image Filter
// @version 1.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import dispatcher from '../dispatcher/dispatcher';

export default {

  // Tweets
  receiveTweet(tweet) {

    const action = {
      type: 'RECEIVE_TWEET',
      tweet: tweet
    };

    dispatcher.dispatch(action);
  },

  // Collections
  addTweetToCollection (tweet) {

    const action = {
      type: 'ADD_TWEET_TO_COLLECTION',
      tweet: tweet
    };

    dispatcher.dispatch(action);
  },

  removeTweetFromCollection (tweetID) {

    const action = {
      type: 'REMOVE_TWEET_FROM_COLLECTION',
      tweetID: tweetID
    };

    dispatcher.dispatch(action);
  },

  removeAllTweetsFromCollection () {

    const action = {
      type: 'REMOVE_ALL_TWEETS_FROM_COLLECTION'
    };

    dispatcher.dispatch(action);
  },

  setCollectionName (collectionName) {

    const action = {
      type: 'SET_COLLECTION_NAME',
      collectionName: collectionName
    };

    dispatcher.dispatch(action);
  }

};
