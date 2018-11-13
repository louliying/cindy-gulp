var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

var {sourcePath, distPath} = require('../config');

gulp.task('babel', ()=> {
    // return gulp.src(sourcePath + '/js/**/*.js')
                        // .pipe(babel())
                        // .pipe(gulp.dest(sourcePath + '/babel/'));
    return browserify({
            entries: sourcePath + '/js/index/index.js',
            debug: true
        })
        .transform(babelify, {presets: ["es2015", "stage-0", "stage-1"], "plugins": ["transform-decorators-legacy","transform-es3-property-literals","transform-es3-member-expression-literals"]}) //babel 6.0  https://github.com/babel/babelify
        .bundle()
        .pipe(source('all.js'))
        .pipe(gulp.dest( sourcePath + '/babel'));
});