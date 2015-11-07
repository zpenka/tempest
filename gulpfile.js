'use strict';

// Tempest Build Process Configuration
var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

gulp.task('build', function () {
  return browserify({
    entries: ['src/app.js'],
    extensions: ['.js', '.json'],
    paths: ['js'],
    debug: true
  })
    .transform(babelify)
    .bundle()
    .on('error', function (err) {
      console.log(err.message);
    })
    .pipe(source('tempest.js'))
    .pipe(gulp.dest('build'))
});

gulp.task('minify', ['build'], function () {
  return gulp.src('./build/tempest.js')
    .pipe(uglify())
    .pipe(rename('tempest.min.js'))
    .pipe(gulp.dest('./build/'));
});

gulp.task('dev', ['build'], function () {
  gulp.watch(['src/**/*.js', '!build/*.js'], ['build']);
});

gulp.task('default', function () {
  gulp.start('build', 'minify');
});
