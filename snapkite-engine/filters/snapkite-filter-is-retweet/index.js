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
    if (tweet.text.indexOf("RT") > -1) {
      return true;
    }

    return false;
  }

  // Show only tweets without this content
  if (!CONFIG.content.with && CONFIG.content.without) {
    if (tweet.text.indexOf("RT") > -1) {
      return false;
    }

    return true;
  }
}

module.exports = {
  isValid: isValid
};
