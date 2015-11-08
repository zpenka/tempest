'use strict';

// Tempest Live Image Filter
// @version 1.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import dispatcher from '../dispatcher/dispatcher';
import {EventEmitter} from 'events';
import {assign} from 'lodash';

// Private
const CHANGE_EVENT = 'change';
let tweetCollection = {};
let collectionName = 'new';

function addTweetToCollection (tweet) {
  tweetCollection[tweet.id] = tweet;
}

function removeTweetFromCollection (tweetID) {
  delete tweetCollection[tweetID];
}

function removeAllTweetsFromCollection () {
  tweetCollection = {};
}

function setCollectionName (name) {
  collectionName = name;
}

function emitChange () {
  CollectionStore.emit(CHANGE_EVENT);
}

// Public
const CollectionStore = assign({}, EventEmitter.prototype, {

  addChangeListener (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener (callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getTweetCollection () {
    return tweetCollection;
  },

  getCollectionName () {
    return collectionName;
  }

});

CollectionStore.dispatcherID = dispatcher.register((action) => {
  switch (action.type) {

    case 'ADD_TWEET_TO_COLLECTION':
      addTweetToCollection(action.tweet);
      emitChange();
      break;

    case 'REMOVE_TWEET_FROM_COLLECTION':
      removeTweetFromCollection(action.tweetID);
      emitChange();
      break;

    case 'REMOVE_ALL_TWEETS_FROM_COLLECTION':
      removeAllTweetsFromCollection();
      emitChange();
      break;

    case 'SET_COLLECTION_NAME':
      setCollectionName(action.collectionName);
      emitChange();
      break;

    default: // .. do  nothing

  }
});

export default CollectionStore;
