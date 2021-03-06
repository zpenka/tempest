'use strict';

// Tempest Live Image Filter
// @version 1.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import React from 'react';
import postcss from '../postcss';

export default React.createClass({
  render () {
    const styles = postcss({
      button: {
        display: 'inline-block',
        padding: '6px 12px',
        fontSize: '1rem',
        fontWeight: 'normal',
        lineHeight: '1.4285',
        textAlign: 'center',
        whiteSpace: 'nowrap',
        verticalAlign: 'middle',
        cursor: 'pointer',
        border: '1px solid #8c8c8c',
        borderRadius: '4px',
        color: '#333',
        backgroundColor: '#e6e6e6',
        margin: '10px 10px 10px 0'
      }
    });

    return (
      <button
        style={styles.button}
        onClick={this.props.handleClick}>{this.props.label}</button>
    );
  }
});
