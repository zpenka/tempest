'use strict';

// Tempest Live Image Filter
// @version 1.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import React from 'react';
import actions from '../actions/actions';
import Tweet from './tweet';
import postcss from '../postcss';

export default React.createClass({

  removeTweetFromCollection (tweet) {
    actions.removeTweetFromCollection(tweet.id);
  },

  getTweetIDs () {
    return Object.keys(this.props.tweets);
  },

  getTweetElement (tweetID) {
    const tweet = this.props.tweets[tweetID];
    const handleRemoveTweet = this.removeTweetFromCollection;
    let tweetEl = null;
    const styles = postcss({
      li: {
        display: 'inline-block',
        listStyle: 'none'
      }
    });

    if (handleRemoveTweet) {
      tweetEl = (
        <Tweet
          tweet={tweet}
          onImageClick={handleRemoveTweet} />
      );
    } else {
      tweetEl = <Tweet tweet={tweet} />;
    }

    return <li style={styles.li} key={tweet.id}>{tweetEl}</li>;
  },

  render () {
    const tweetEls = this.getTweetIDs().map(this.getTweetElement);
    const styles = postcss({
      ul: {
        padding: '0'
      }
    });

    return (
      <ul style={styles.ul}>
        {tweetEls}
      </ul>
    );
  }
});
