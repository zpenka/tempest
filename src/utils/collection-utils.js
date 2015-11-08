'use strict';

// Tempest Live Image Filter
// @version 1.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

export default {

  getNumberOfTweets(collection) {
    var TweetUtils = require('./tweet-utils');
    var listofCollectionIDs = TweetUtils.getListOfTweetIDs(collection);

    return listofCollectionIDs.length;
  },

  isEmptyCollection(collection) {
    return (getNumberOfTweets(collection) === 0);
  }

}
