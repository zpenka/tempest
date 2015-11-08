'use strict';

// Tempest Live Image Filter
// @version 1.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import dispatcher from '../dispatcher/dispatcher';
import {EventEmitter} from 'events';
import {assign} from 'lodash';

// Private
let tweet = null;

function setTweet (receivedTweet) {
    tweet = receivedTweet;
}

function emitChange () {
    TweetStore.emit('change');
}

// Public
const TweetStore = assign({}, EventEmitter.prototype, {

  getTweet () {
    return tweet;
  },

  addChangeListener (callback) {
    this.on('change', callback);
  },

  removeChangeListener (callback) {
    this.removeListener('change', callback);
  }

});

// Register the store with the dispatcher
TweetStore.dispatcherID = dispatcher.register((action) => {
  switch (action.type) {
    case 'receive_tweet' :
      setTweet(action.tweet);
      emitChange();
      break;
  }
});

export default TweetStore;
