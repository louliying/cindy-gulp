var gulp = require('gulp');
var clean = require('del');

var {sourcePath, distPath} = require('../config');

gulp.task('clean', ()=> {
    // return gulp.src([sourcePath + '/_build/', distPath + '/img/**/_*/', !distPath + '/img/**/_*.png'])
        // .pipe(clean());
    return clean([
        sourcePath + '/_build/',
        distPath + '/img/**/_*/',
        !distPath + '/img/**/_*.png'
    ]);
});