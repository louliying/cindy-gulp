var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-file-rename');

var {sourcePath, distPath} = require('../config');

gulp.task('cssmin', ()=> {
    return gulp.src([sourcePath + '/_build/**/*.css'])
        .pipe(cssmin())
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest(distPath + '/css'));
});