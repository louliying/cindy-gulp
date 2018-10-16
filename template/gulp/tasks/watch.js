import gulp from 'gulp';
import browserSync from 'browser-sync';
import runSequence from 'run-sequence';

import {sourcePath, distPath} from '../config';

var reload =  browserSync.reload;

// watching
gulp.task('watch', function () {
            // 这种方法， 修改了某一个js， 会把compass include-html, concat inject全都跑了一遍
            // 而且这几个task，是异步的include-html 还没有结束， inject可以已经开始并结束了
	// gulp.watch([
                // sourcePath + '/scss/**/*.scss',
                // sourcePath + '/temp/**/*.debug.html',
                // sourcePath + '/temp/**/*.include.html',
                // sourcePath + '/js/**/*.js',
	// ], ['compass','include-html','include-html', 'concat', 'inject']);

	// gulp.watch([distPath + '/*.html', distPath + '/js/**/*.js']).on('change', browserSync.reload);

    var watcher1 = gulp.watch(sourcePath + '/scss/**/*.scss', ['compass', 'autoprefixer', 'copy', 'clean']);
    watcher1.on('change', (event) => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        runSequence(['compass'], 'autoprefixer', 'cssmin','copy', 'clean');
         browserSync.reload;
    });

    var watcher2 = gulp.watch(sourcePath + '/temp/**/*.debug.html', ['include-html']);
    watcher2.on('change', (event) => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        // gulp inject;
        runSequence(['include-html'], 'inject');
        browserSync.reload
    });

    var watcher3 = gulp.watch(sourcePath + '/temp/**/*.include.html', ['include-html']);
    watcher3.on('change', (event) => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
        // gulp inject;
        runSequence(['include-html'], 'inject');
        browserSync.reload
    });

    var watcher4 = gulp.watch(sourcePath + '/js/**/*.js', ['concat']);
    watcher4.on('change', (event) => {
        console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
         browserSync.reload
    });
    gulp.watch([distPath + '/*.html', distPath + '/js/**/*.js', distPath + '/css/**/*.css']).on('change', browserSync.reload);

});