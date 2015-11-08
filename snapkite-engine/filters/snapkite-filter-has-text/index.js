var CONFIG = require('./config.json');

function isValid(tweet) {
  // This filter doesn't block anything
  if (CONFIG.content.with && CONFIG.content.without) {
    return true;
  }

  // This filter blocks all tweets
  if (!CONFIG.content.with && !CONFIG.content.without) {
    return false;
  }

  // Show only tweets with this content
  if (CONFIG.content.with && !CONFIG.content.without) {
    if (typeof tweet.text !== 'undefined') {
      if (
        tweet.entities
        && tweet.entities.media
        && tweet.entities.media[0]
        && tweet.entities.media[0].url
      ) {

        var textWithoutMediaUrl = tweet.text.replace(tweet.entities.media[0].url, '');

        if (textWithoutMediaUrl.length > 0) {
          return true;
        }
      }
    }

    return false;
  }

  // Show only tweets without this content
  if (!CONFIG.content.with && CONFIG.content.without) {
    if (typeof tweet.text !== 'undefined') {
      if (
        tweet.entities
        && tweet.entities.media
        && tweet.entities.media[0]
        && tweet.entities.media[0].url
      ) {

        var textWithoutMediaUrl = tweet.text.replace(tweet.entities.media[0].url, '');

        if (textWithoutMediaUrl.length > 0) {
          return false;
        }
      }
    }

    return true;
  }
}

module.exports = {
  isValid: isValid
};
