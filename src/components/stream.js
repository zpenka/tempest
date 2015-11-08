'use strict';

// Tempest Live Image Filter
// @version 1.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import React from 'react';
import StreamTweet from './stream-tweet';
import Header from './header';
import TweetStore from '../stores/tweet';

export default React.createClass({
  getInitialState () {
    return {
      tweet: TweetStore.getTweet()
    }
  },

  componentDidMount () {
    TweetStore.addChangeListener(this.onTweetChange);
  },

  componentWillUnmount () {
    TweetStore.removeChangeListener(this.onTweetChange);
  },

  onTweetChange () {
    this.setState({
      tweet: TweetStore.getTweet()
    });
  },

  render () {
    // Set tweet
    const tweet = this.state.tweet;

    // If there is a tweet, stream it in
    if (tweet) {
      return (
        <StreamTweet tweet={tweet} />
      );
    }

    // If there isn't, show a loading message
    return (
      <Header text="Loading tweets..." />
    );
  }
});
