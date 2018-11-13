var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pump = require('pump');
var rename = require('gulp-rename');

var {sourcePath, distPath} = require('../config');

gulp.task('uglify', () => {
    //return pump([
        //gulp.src( sourcePath + '/concat/**/*.js'),
        //uglify(),
        //pipe(rename({ suffix: '.min' })),
        //gulp.dest(distPath + '/')
    //]
    return gulp.src(sourcePath + '/concat/**/*.js')
        .pipe(uglify())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(distPath + '/'));
});