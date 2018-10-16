import gulp from 'gulp';
import inject from 'gulp-inject';

import {sourcePath, distPath} from '../config';


gulp.task('inject', ()=> {


    gulp.src(distPath + '/**/*.html')
        .pipe(inject(gulp.src([distPath + '/js/*.js', distPath + '/css/*.css'], {read: false}), {relative: true}))
        .pipe(gulp.dest(distPath));
});