// Unit test for tweet-utils
jest.dontMock('../tweet-utils');

describe('Tweet utilities module', function () {

  it('returns an array of tweet ids', function () {

    var TweetUtils = require('../tweet-utils');
    var tweetsMock = {
      tweet1: {},
      tweet2: {},
      tweet3: {}
    };

    var expectedListOfTweets = ['tweet1', 'tweet2', 'tweet3'];
    var actualListOfTweets = TweetUtils.getListOfTweetIDs(tweetsMock);

    expect (actualListOfTweets).toEqual(expectedListOfTweets);
  });
});
