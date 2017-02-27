'use strict';

const gulp = require('gulp');
const connect = require('gulp-connect');
const open = require('gulp-open');

const options = {
  port: 9009,
  root: ['src'],
  devBase: 'http://localhost:',
  browser: 'chrome'
};

const openOptions = {
  uri: options.devBase + options.port,
  app: options.browser
};

gulp.task('connect', () => connect.server({
  root: options.root,
  port: options.port
}));

gulp.task('open', () => gulp.src(__filename).pipe(open(openOptions)));

gulp.task('default', ['connect', 'open']);
