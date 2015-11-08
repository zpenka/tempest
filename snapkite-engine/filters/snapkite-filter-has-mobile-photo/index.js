var CONFIG = require('./config.json');

function textHasImageUrl(tweet) {
  return (tweet.text.indexOf(tweet.entities.media[0].url) > -1);
}

function isMobileMediaSize(tweet) {
  return (
    tweet.entities.media[0].sizes.medium.w > 599
    && tweet.entities.media[0].sizes.medium.h > 798
    && tweet.entities.media[0].sizes.medium.h < 820
  );
}

function isValid(tweet) {
  // This filter doesn't block anything
  if (CONFIG.content.with && CONFIG.content.without) {
    return true;
  }

  // This filter blocks all tweets
  if (!CONFIG.content.with && !CONFIG.content.without) {
    return false;
  }

  // Show only with this content
  if (CONFIG.content.with && !CONFIG.content.without) {
    if (
      tweet.entities
      && tweet.entities.media
      && tweet.entities.media[0]
      && tweet.entities.media[0].type
      && tweet.entities.media[0].type === "photo"
      && tweet.source
      && tweet.source !== "web"
      && textHasImageUrl(tweet)
      && isMobileMediaSize(tweet)
    ) {
      return true;
    }

    return false;
  }

  // Show only without this content
  if (!CONFIG.content.with && CONFIG.content.without) {
    if (
      tweet.entities
      && tweet.entities.media
      && tweet.entities.media[0]
      && tweet.entities.media[0].type
      && tweet.entities.media[0].type === "photo"
      && tweet.source
      && tweet.source !== "web"
      && textHasImageUrl(tweet)
      && isMobileMediaSize(tweet)
    ) {
      return false;
    }

    return true;
  }
}

module.exports = {
  isValid: isValid
};
