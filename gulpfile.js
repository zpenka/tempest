'use strict';

// Tempest Build Process Configuration
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('default', function () {
  return browserify('./src/app.js')
    .transform(babelify)
    .bundle()
    .pipe(source('tempest.js'))
    .pipe(gulp.dest('./build/'));
});
