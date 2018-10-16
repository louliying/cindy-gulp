import gulp from 'gulp';
import cssmin from 'gulp-cssmin';
import rename from 'gulp-file-rename';

import {sourcePath, distPath} from '../config';

gulp.task('cssmin', ()=> {
    return gulp.src([sourcePath + '/_build/**/*.css'])
        .pipe(cssmin())
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest(distPath + '/css'));
});