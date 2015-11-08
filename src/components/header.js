'use strict';

// Tempest Live Image Filter
// @version 1.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import React from 'react';
import postcss from '../postcss';

export default React.createClass({
  getDefaultProps () {
    // Default text property
    return {
      text: "Tempest"
    };
  },

  render () {
    const styles = postcss({
      header: {
        fontSize: '1rem',
        fontWeight: '300',
        display: 'inline-block',
        margin: '1.25rem 0.625rem'
      }
    });

    return (
      <h2 style={styles.header}>{this.props.text}</h2>
    );
  }
});
