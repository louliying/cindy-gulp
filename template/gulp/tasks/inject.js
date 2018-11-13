var gulp = require('gulp');
var inject = require('gulp-inject');

var {sourcePath, distPath} = require('../config');


gulp.task('inject', ()=> {
    gulp.src(distPath + '/**/*.html')
        .pipe(inject(gulp.src([distPath + '/js/*.min.js', distPath + '/css/*.min.css'], {read: false}), {relative: true}))
        // .pipe(inject(gulp.src([distPath + '/css/*.css'], {read: false}), {relative: true}))
        .pipe(gulp.dest(distPath));
});