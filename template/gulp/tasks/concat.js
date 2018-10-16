import gulp from 'gulp';
import concat from 'gulp-concat';

import {sourcePath, distPath} from '../config';

gulp.task('concat', ()=> {
    return gulp.src(sourcePath + '/js/**/*.js')
                        .pipe(concat('index.js'))
                        .pipe(gulp.dest(distPath + '/js/'));
});