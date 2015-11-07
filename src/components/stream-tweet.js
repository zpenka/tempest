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

  componentWillUnmount () {
    delete window.tempest;
  },

  render () {
    return(
      <article>
      </article>
    );
  }
});
