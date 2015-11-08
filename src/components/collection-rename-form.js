'use strict';

// Tempest Live Image Filter
// @version 1.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import React from 'react';
import ReactDOM from 'react-dom';
import actions from '../actions/actions';
import Header from './header';
import Button from './button';
import postcss from '../postcss';
import CollectionStore from '../stores/collection';

export default React.createClass({
  getInitialState () {
    return {
      inputValue: CollectionStore.getCollectionName()
    };
  },

  setInputValue (inputValue) {
    this.setState({
      inputValue: inputValue
    });
  },

  handleInputValueChange (event) {
    const inputValue = event.target.value;
    this.setInputValue(inputValue);
  },

  handleFormSubmit (event) {
    event.preventDefault();

    const collectionName = this.state.inputValue;
    actions.setCollectionName(collectionName);
    this.props.onChangeCollectionName(collectionName);
  },

  handleFormCancel (event) {
    event.preventDefault();

    const collectionName = CollectionStore.getCollectionName();
    this.setInputValue(collectionName);
    this.props.onCancelCollectionNameChange();
  },

  componentDidMount () {
    this.refs.collectionName.focus();
  },

  render () {
    const styles = postcss({
      form: {
        // Placeholder for future styles
      },

      formGroup: {
        marginBottom: '0',
        display: 'inline-block',
        verticalAlign: 'middle'
      },

      input: {
        marginRight: '5px',
        display: 'inline-block',
        width: 'auto',
        verticalAlign: 'middle',
        height: '34px',
        padding: '6px 12px',
        fontSize: '1rem',
        lineHeight: '1.4285',
        color: '#555',
        backgroundColor: '#fff',
        border: '1px solid #ccc',
        borderRadius: '4px'
      }
    });

    return (
      <form style={styles.form} onSubmit={this.handleSubmit}>

        <Header text="Collection name:" />

        <div style={styles.formGroup}>
          <input
            style={styles.input}
            onChange={this.handleInputValueChange}
            value={this.state.inputValue}
            ref="collectionName" />
        </div>

        <Button label="Change" handleClick={this.handleFormSubmit} />
        <Button label="Cancel" handleClick={this.handleFormCancel} />
      </form>
    );
  }
});
