'use strict';

// Tempest Live Image Filter
// @version 0.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import React from 'react';
import postcss from '../postcss';

export default React.createClass({
  render () {
    const styles = postcss({
      form: {
        display: 'inline-block'
      },

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
      <form action="http://codepen.io/pen/define" method="POST" target="_blank" style={styles.form}>
        <input type="hidden" name="data" value={this.props.htmlMarkup} />
        <button type="submit" style={styles.button}>Export as HTML</button>
      </form>
    );
  }
});
