'use strict';

// Tempest Live Image Filter
// @version 0.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import React from 'react';
import SnapkiteClient from 'snapkite-stream-client';
import StreamTweet from './stream-tweet.js';
import Header from './header.js';

export default React.createClass({
  getInitialState () {
    return {
      tweet: null
    }
  },

  componentDidMount () {
    SnapkiteClient.initializeStream(this.handleNewTweet);
  },

  componentWillUnmount () {
    SnapkiteClient.destroyStream();
  },

  handleNewTweet (tweet) {
    this.setState({
      tweet: tweet
    });
  },

  render () {
    // Set tweet
    const tweet = this.state.tweet;

    // If there is a tweet, stream it in
    if (tweet) {
      return (
        <StreamTweet
          tweet={tweet}
          onAddTweet={this.props.onAddTweet} />
      );
    }

    // If there isn't, show a loading message
    return (
      <Header text="Loading tweets..." />
    );
  }
});
