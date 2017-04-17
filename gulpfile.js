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
const browserSync = require('browser-sync').create();
const gulp = require('gulp');
const initWcBuild = require('byu-web-component-build').gulp;

initWcBuild(gulp, {
    componentName: 'byu-demo-component',
    js: {
        input: './byu-demo-component/script.js'
    }
    // if FOUC is added later, then specify that stylesheet here, to load styling before component loads
    //css: {
    //    input: './css/site.scss'
    //}
});

gulp.task('watch', ['build'], function (done) {

    browserSync.init({
        server: {
            baseDir: './',
        },
        startPath: '/docs/index.html',
        notify: false
    }, done);

    gulp.watch(['./byu-demo-component/**', './css/*.scss'], ['build']);
});

gulp.task('build', ['wc:build']);