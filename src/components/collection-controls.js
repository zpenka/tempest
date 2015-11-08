'use strict';

// Tempest Live Image Filter
// @version 1.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import React from 'react';
import Header from './header';
import Button from './button';
import CollectionRenameForm from './collection-rename-form';
import CollectionExportForm from './collection-export-form';
import action from '../actions/actions';
import CollectionStore from '../stores/collection';

export default React.createClass({
  getInitialState () {
    return {
      isEditingName: false
    };
  },

  getHeaderText () {
    const numberOfTweets = this.props.numberOfTweets;
    let text = numberOfTweets;
    const name = CollectionStore.getCollectionName();

    if (numberOfTweets === 1) {
      text = `${text} tweet in your`;
    } else {
      text = `${text} tweets in your`;
    }

    return (
      <span>
        {text} <strong>{name}</strong> collection
      </span>
    );
  },

  toggleEditCollectionName () {
    this.setState({
      isEditingName: !this.state.isEditingName
    });
  },

  removeAllTweets () {
    actions.removeAllTweetsFromCollection();
  },

  render () {
    if (this.state.isEditingName) {
      return (
        <CollectionRenameForm
          onCancelCollectionNameChange={this.toggleEditCollectionName} />
      );
    }

    return (
      <div>
        <Header text={this.getHeaderText()} />

        <Button
          label="Rename Collection"
          handleClick={this.toggleEditCollectionName} />

        <Button
          label="Empty Collection"
          handleClick={this.removeAllTweets} />

        <CollectionExportForm htmlMarkup={this.props.htmlMarkup} />
      </div>
    );
  }
});
