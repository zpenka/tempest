'use strict';

// Tempest Live Image Filter
// @version 0.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import React from 'react';
// import Header from './header.js';
// import Tweet from './tweet.js';

export default React.createClass({
  getInitialState () {
    return {
      numberOfCharactersIsIncreasing: null,
      headerText: null
    };
  },

  componentWillMount () {
    this.setState({
      numberOfCharactersIsIncreasing: true,
      headerText: "Latest images from Twitter"
    });

    // Global tempest object. This guy just keeps track of some basic statistics
    // and is not related to this project in any other way
    window.tempest = {
      numberOfReceivedTweets: 1,
      numberOfDisplayedTweets: 1
    };
  },

  componentWillReceiveProps (nextProps) {
    const currentTweetLength = this.props.tweet.text.length;
    const nextTweetLength = nextProps.tweet.text.length;
    const isNumberOfCharactersIncreasing = (nextTweetLength > currentTweetLength);
    let headerText = null;

    // Set header text
    if (numberOfCharactersIsIncreasing) {
      headerText = "Number of characters is increasing";
    } else {
      headerText = "Latest images from Twitter";
    }

    // Update state
    this.setState({
      headerText: headerText,
      numberOfCharactersIsIncreasing: isNumberOfCharactersIncreasing
    });

    // Increment global count
    window.tempest.numberOfReceivedTweets++;
  },

  shouldComponentUpdate (nextProps, nextState) {
    // Only update if the length is greater than 1
    return (nextProps.tweet.text.length > 1);
  },

  componentDidUpdate (prevProps, prevState) {
    window.tempest.numberOfDisplayedTweets++;
  },

  componentWillUnmount () {
    // Clean up global variable
    delete window.tempest;
  },

  render () {
    return(
      <article>
      </article>
    );
  }
});
