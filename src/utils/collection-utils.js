'use strict';

// Tempest Live Image Filter
// @version 0.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

function getNumberOfTweets(collection) {
  var TweetUtils = require('./tweet-utils');
  var listofCollectionIDs = TweetUtils.getListOfTweetIDs(collection);

  return listofCollectionIDs.length;
}

function isEmptyCollection(collection) {
  return (getNumberOfTweets(collection) === 0);
}

module.exports = {
  getNumberOfTweets: getNumberOfTweets,
  isEmptyCollection: isEmptyCollection
};
