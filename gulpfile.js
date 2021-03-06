'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var nodemon = require('gulp-nodemon');

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

gulp.task('start', function () {
  nodemon({
    script: 'server.js'
  })
})

gulp.task('default', ['sass', 'sass:watch', 'start'], function () {
  console.log('starting up gulp dependencies...');
})
