'use strict';

// Tempest Live Image Filter
// @version 1.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import React from 'react';
import postcss from '../postcss';

export default React.createClass({
  propTypes: {
    tweet: function(properties, propertyName, componentName) {
      const tweet = properties[propertyName];

      if (! tweet) {
        return new Error("Tweet must be set.");
      }

      if (! tweet.media) {
        return new Error("Tweet must have an image.");
      }
    }
  },

  handleImageClick () {
    const tweet = this.props.tweet;
    const onImageClick = this.props.onImageClick;

    if (onImageClick) {
      onImageClick(tweet);
    }
  },

  render () {
    const tweet = this.props.tweet;
    const tweetURL = tweet.media[0].url;
    const styles = postcss({
      tweet: {
        position: 'relative',
        display: 'inline-block',
        width: '18.75rem',
        height: '25rem',
        margin: '0.625rem'
      },

      image: {
        maxHeight: '25rem',
        boxShadow: '0 1px 1px 0 #aaa',
        border: '1px solid #fff'
      }
    });

    return (
      <div style={styles.tweet}>
        <img src={tweetURL} onClick={this.handleImageClick} style={styles.image} />
      </div>
    );
  }
});
