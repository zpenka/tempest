'use strict';

// Tempest Live Image Filter
// @version 0.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import React from 'react';
// import Stream from './stream.js';
// import Collection from './collection.js';
import {assign} from 'lodash';
import postcss from '../postcss.js'

export default React.createClass({
  getInitialState () {
    return {
      collection: {}
    };
  },

  addTweet (tweet) {
    let collection = this.state.collection;

    // Add tweet to collection
    collection[tweet.id] = tweet;

    // Update state
    this.setState({
      collection: collection
    });
  },

  removeTweet (tweet) {
    let collection = this.state.collection;

    // Remove tweet from collection
    delete collection[tweet.id];

    // Update state
    this.setState({
      collection: collection
    });
  },

  removeAllTweets () {
    // Update state
    this.setState({
      collection: {}
    });
  },

  render () {
    const styles = postcss({
      main: {
        width: '100%',
        height: '100%',
        backgroundColor: '#666666'
      },

      mixer: {
        float: 'left',
        backgroundColor: '#e4e4e4'
      },

      aside: {
        width: '30%',
      },

      section: {
        width: '30%',
      }
    });

    // Augment the content blocks
    assign(styles.aside, styles.mixer);
    assign(styles.section, styles.mixer);

    return (
      <main style={styles.main}>
        <aside style={styles.aside}>
        </aside>
        <div style={styles.section}>
        </div>
      </main>
    );
  }
});
