var gulp = require('gulp');

var {sourcePath, distPath} = require('../config');

const sourceFiles = [ sourcePath + '/img/**/*.*'];
const destination = distPath + '/img';

gulp.task('copy', ()=> {
    return gulp.src(sourceFiles)
        .pipe(gulp.dest(destination));
});