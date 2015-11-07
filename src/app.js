'use strict';

// Tempest Live Image Filter
// @version 0.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import React from 'react';
import ReactDOM from 'react-dom';
import Tempest from './components/tempest';

// Get mount point
const el = document.getElementById('tempest');

// Mount react to the document
ReactDOM.render(<Tempest />, el);
