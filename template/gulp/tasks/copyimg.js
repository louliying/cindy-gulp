import gulp from 'gulp';

import {sourcePath, distPath} from '../config';

const sourceFiles = [ sourcePath + '/img/**/*.*'];
const destination = distPath + '/img';

gulp.task('copy', ()=> {
    return gulp.src(sourceFiles)
        .pipe(gulp.dest(destination));
});