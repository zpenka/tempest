'use strict';

// Tempest Live Image Filter
// @version 1.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import Dispatcher from '../dispatcher/dispatcher';

function receiveTweet(tweet) {
  const action = {
    type: 'receive_tweet',
    tweet: tweet
  },

  Dispatcher.dispatch(action);
}

module.exports = {
  receiveTweet: receiveTweet
};
