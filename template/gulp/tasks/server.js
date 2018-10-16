import gulp from 'gulp';
import browserSync from 'browser-sync';
// import nodemon from 'gulp-nodemon';
import {sourcePath, distPath} from '../config';

// console.log(localIp);
gulp.task('server', [], () => {
	browserSync.init(null, {
		//proxy: 'http://'+ localIp+':3002',
		files: [distPath + '/css/**/*.css',  distPath + '/template/**/*.html'],
		//browser: 'chrome',
		//notify: false,
		port: 3000,
		server: {
			baseDir: './dist'
		},
		open: "external",
		startPath:  '/index.html'
	});
});