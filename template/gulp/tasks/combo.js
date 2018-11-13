var gulp = require('gulp');
var runSequence = require('run-sequence');

// 2018.11.13注释, 此种方案, IE8不支持，9，10，11都OK
gulp.task('dev1', (cb) => {
    runSequence('compass',
                            'autoprefixer',
                            'cssmin',
                            'copy',
                            'clean',
                            'babel',
                            'concat',
                            'uglify',
                            [ 'include-html'], 'inject', 'server', 'watch', cb);
})

// ES6的moudle babel转后， 报 require 11.13 remark
gulp.task('dev2', (cb) => {
    runSequence('style',
                            'script',
                            [ 'include-html'], 'inject', 'server', 'watch', cb);
})