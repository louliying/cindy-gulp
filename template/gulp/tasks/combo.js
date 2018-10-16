import gulp from 'gulp';
import runSequence from 'run-sequence';

// gulp.task('dev', ['compass', 'include-html', 'inject', 'server','watch'], ()=> {
    //gulp.watch(['sass/**/*.*'], ['sass']);
// });
gulp.task('dev', (cb) => {
    runSequence('compass',
                            'autoprefixer',
                            'cssmin',
                            'copy',
                            'clean',
                            [ 'include-html', 'concat'], 'inject', 'server', 'watch', cb);
})