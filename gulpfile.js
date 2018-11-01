// Gulp Configuration file

'use strict';
var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync')
var nodemon = require('nodemon')

sass.compiler = require('node-sass');

// Sass compile task
gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'compact'}).on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

// Sass compile task :watch
gulp.task('sass:watch', function () {
  gulp.watch('./sass/**/*.scss', ['sass']);
});

// BrowserSync task
gulp.task('browser-sync', ['nodemon'], function() {
	browserSync.init(null, {
		proxy: "http://localhost:3000",
		files: ['./**/*.*'],
        port: 5000,
	});
});

// Nodemon task
gulp.task('nodemon', function (cb) {
	var started = false
	return nodemon({
		script: './server.js'
	}).on('start', function () {
		// to avoid nodemon being started multiple times
		// thanks @matthisk
		if (!started) {
			cb();
			started = true; 
		} 
	});
});

// Default task: start BrowserSync, Nodemon and compile sass
gulp.task('default', ['browser-sync','sass:watch'], function () {
});