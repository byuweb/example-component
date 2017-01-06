/**
 *  @license
 *    Copyright 2016 Brigham Young University
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 **/
'use strict';
//const cached    = require('gulp-cached');
const fuse      = require('gulp-fuse');
const gulp      = require('gulp');
const sass      = require('gulp-sass');

gulp.task('build', ['fuse'], function() {
    // put closure code in here
});

gulp.task('fuse', ['sass'], function() {
	/* Pulling the files of the component and bundling them into a single js file */
    return gulp.src('./my-component/*')
        //.pipe(cached('fuse'))
        .pipe(fuse())
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function() {
	/* compiles the scss into css */
    return gulp.src('./my-component/*.scss')
        //.pipe(cached('sass'))
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./my-component'));
});

gulp.task('watch', function () {
	/* whenever a file in my-component directory is changed, run the fuse task to re-bundle  */
    gulp.watch('./my-component/*', ['build']);
});

gulp.task('default', ['watch']);