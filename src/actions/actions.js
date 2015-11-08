'use strict';

// Tempest Live Image Filter
// @version 1.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import dispatcher from '../dispatcher/dispatcher';

export default {
  receiveTweet(tweet) {

    console.log("Dispatching tweet");

    const action = {
      type: 'receive_tweet',
      tweet: tweet
    };

    dispatcher.dispatch(action);
  }
};
