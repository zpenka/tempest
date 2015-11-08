'use strict';

// Tempest Live Image Filter
// @version 1.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import SnapkiteClient from 'snapkite-stream-client';
import actions from '../actions/actions';

export default {
  initializeTweetStream () {
    SnapkiteClient.initializeStream(actions.receiveTweet);
  }
}
