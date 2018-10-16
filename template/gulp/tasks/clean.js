import gulp from 'gulp';
import clean from 'del';

import {sourcePath, distPath} from '../config';

gulp.task('clean', ()=> {
    // return gulp.src([sourcePath + '/_build/', distPath + '/img/**/_*/', !distPath + '/img/**/_*.png'])
        // .pipe(clean());
    return clean([
        sourcePath + '/_build/',
        distPath + '/img/**/_*/',
        !distPath + '/img/**/_*.png'
    ]);
});