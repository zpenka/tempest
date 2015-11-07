'use strict';

// Tempest Live Image Filter
// @version 0.0.1
// @author Zack Penka (following React.js Essentials, Artemij Fedosejev)
//

import postcss from 'postcss';
import postcssJS from 'postcss-js';

// postCSS Plugins
// import precss from 'precss';
import cssnext from 'cssnext';
// import autoprefixer from 'autoprefixer';

export default postcssJS.sync([
  // postCSS plugin pipeline
  // precss,
  cssnext,
  // autoprefixer
 ]);
