jest.autoMockOff();

describe('Collection utilities module', function () {

  var CollectionUtils = require('../collection-utils');
  var collectionTweetsMock = {
    collectionTweet7: {},
    collectionTweet8: {},
    collectionTweet9: {}
  };

  it('returns a number of tweets in collection', function getNumberOfTweets() {

    var actualNumberOfTweetsInCollection = CollectionUtils.getNumberOfTweets(collectionTweetsMock);
    var expectedNumberOfTweetsInCollection = 3;

    expect(actualNumberOfTweetsInCollection).toBe(expectedNumberOfTweetsInCollection);

  });

  it('checks if collection is not empty', function isNotEmptyCollection() {

    var actualIsEmptyCollectionValue = CollectionUtils.isEmptyCollection(collectionTweetsMock);

    expect(actualIsEmptyCollectionValue).toBeDefined();
    expect(actualIsEmptyCollectionValue).toBe(false);
    expect(actualIsEmptyCollectionValue).not.toBe(true);

  });

});
