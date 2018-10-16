import gulp from 'gulp';
import uglify from 'gulp-uglify';
import pump from 'pump';

import {sourcePath, distPath} from '../config';

gulp.task('uglify', () => {
    var options = {

    };

    return gulp.src(distPath + '/js/**/*.js')
                        .pipe(uglify(options))
                        .pipe(gulp.dest(distPath + '/js/'));

});