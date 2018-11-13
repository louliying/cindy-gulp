var gulp = require('gulp');
var concat = require('gulp-concat');

var {sourcePath, distPath} = require('../config');

gulp.task('concat', ()=> {
    return gulp.src(sourcePath + '/babel/**/*.js')
    // return gulp.src(sourcePath + '/index/**/*.js')
                        .pipe(concat('index.js'))
                         .pipe(gulp.dest(sourcePath + '/concat/js/'));
                        // .pipe(gulp.dest(distPath + '/js/'));
});