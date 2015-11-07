'use strict';

// Tempest Live Image Filter
// @version 0.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CollectionControls from './collection-controls';
import TweetList from './tweet-list';
import Header from './header'

export default React.createClass({
  createHTML () {
    // Create HTML tweet list
    const htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={this.props.tweets} />
    );

    const htmlMarkup = {
      html: htmlString
    };

    return JSON.stringify(htmlMarkup);
  },

  getTweetIDs () {
    // Returns all tweet IDs
    return Object.keys(this.props.tweets);
  },

  getNumberOfTweets () {
    // Returns count of tweets
    return this.getTweetIDs().length;
  },

  render () {
    const numberOfTweets = this.getNumberOfTweets();

    // If we have tweets saved, render them
    if (numberOfTweets > 0) {
      const tweets = this.props.tweets;
      const htmlMarkup = this.createHTML();
      const removeAllTweets = this.props.onRemoveAllTweets;
      const handleRemoveTweet = this.props.onRemoveTweet;

      return (
        <div>
          <CollectionControls
            numberOfTweets={numberOfTweets}
            htmlMarkup={htmlMarkup}
            onRemoveAllTweets={removeAllTweets} />

          <TweetList
            tweets={tweets}
            onRemoveTweet={handleRemoveTweet} />
        </div>
      );
    }

    // Or else show an empty message
    return <Header text="Your collection is empty" />;
  }
});
