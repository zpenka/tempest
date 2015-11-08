'use strict';

// Tempest Live Image Filter
// @version 1.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import React from 'react';
import ReactDOMServer from 'react-dom/server';
import CollectionControls from './collection-controls';
import TweetList from './tweet-list';
import Header from './header'
import _ from '../utils/collection-utils';
import CollectionStore from '../stores/collection';

export default React.createClass({

  getInitialState () {
    return {
      tweetCollection: CollectionStore.getTweetCollection()
    };
  },

  componentDidMount () {
    CollectionStore.addChangeListener(this.onCollectionChange);
  },

  componentWillUnmount () {
    CollectionStore.removeChangeListener(this.onCollectionChange);
  },

  onCollectionChange () {
    this.setState({
      tweetCollection: CollectionStore.getTweetCollection()
    });
  },

  createHTML () {
    // Create HTML tweet list
    const htmlString = ReactDOMServer.renderToStaticMarkup(
      <TweetList tweets={this.state.tweetCollection} />
    );

    const htmlMarkup = {
      html: htmlString
    };

    return JSON.stringify(htmlMarkup);
  },

  render () {
    const tweetCollection = this.state.tweetCollection;
    const numberOfTweets = _.getNumberOfTweets(tweetCollection);

    // If we have tweets saved, render them
    if (numberOfTweets > 0) {
      const htmlMarkup = this.createHTML();

      return (
        <div>
          <CollectionControls
            numberOfTweets={numberOfTweets}
            htmlMarkup={htmlMarkup} />

          <TweetList
            tweets={tweetCollection} />
        </div>
      );
    }

    // Or else show an empty message
    return <Header text="Your collection is empty" />;
  }
});
