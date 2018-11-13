var gulp = require('gulp');
var jshint = require('gulp-jshint');
var babel = require('gulp-babel');
// var browserify = require('browserify');
// var babelify = require('babelify');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');

var {sourcePath, distPath} = require('../config');

gulp.task('script', function() {
    return gulp.src( sourcePath + '/js/**/*.js')
                .pipe(jshint('.jshintrc'))
                .pipe(jshint.reporter('default'))
                .pipe(babel({
                    presets: ["es2015", "stage-0", "stage-1"], "plugins": ["transform-decorators-legacy","transform-es3-property-literals","transform-es3-member-expression-literals"]
                }))
                /*browserify({
                    entries: sourcePath + '/js/index/index.js',
                    debug: true
                })
                .transform(babelify, {presets: ["es2015", "stage-0", "stage-1"], "plugins": ["transform-decorators-legacy","transform-es3-property-literals","transform-es3-member-expression-literals"]}) //babel 6.0  https://github.com/babel/babelify
                .bundle()*/
                .pipe(concat('main.js'))
                .pipe(gulp.dest( distPath + '/js'))
                .pipe(rename({ suffix: '.min' }))
                .pipe(uglify())
                .pipe(gulp.dest(distPath + '/js'))
                .pipe(notify({ message: 'Scripts task complete' }));
});