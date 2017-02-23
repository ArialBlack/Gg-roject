'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var copy = require('gulp-copy');

gulp.task('copy', function() {
    gulp.src(['source/node_modules/bootstrap-sass/assets/javascripts/bootstrap.min.js'])
        .pipe(gulp.dest('../themes/bootstrap/js/'))
    gulp.src(['source/node_modules/instafeed.js/instafeed.min.js'])
        .pipe(gulp.dest('../themes/bootstrap/gg_project/js/'))
    gulp.src(['source/node_modules/bootstrap-sass/assets/fonts/**/*'])
        .pipe(gulp.dest('../themes/bootstrap/fonts/'))
    gulp.src(['source/node_modules/font-awesome/fonts/**/*'])
        .pipe(gulp.dest('../themes/bootstrap/gg_project/fonts/'))
    gulp.src(['source/node_modules/font-awesome/css/font-awesome.min.css'])
        .pipe(gulp.dest('../themes/bootstrap/gg_project/css/'))
});

gulp.task('sass', function () {
    gulp.src('source/etc/bootstrap/styles.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('../themes/bootstrap/css/'));
    gulp.src('source/etc/gg-project/styles.scss')
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(gulp.dest('../themes/bootstrap/gg_project/css/'));
});

gulp.task('sass:watch', function () {
    gulp.watch('source/**/*.scss', ['sass']);
});

gulp.task('default', ['copy', 'sass', 'sass:watch']);
