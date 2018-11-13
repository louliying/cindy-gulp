var gulp = require('gulp');
var browserSync = require('browser-sync');
var proxy = require('http-proxy-middleware');
// import nodemon from 'gulp-nodemon';
var {sourcePath, distPath} = require('../config');

// var https = require('https');

var middleware = proxy(['/specialLottery', '/commondata', '/commonsimplelogin'], {
	target: 'https://mgo.chexiangsit.com/',
	// agent: https.globalAgent,
	changeOrigin: true,
	logLevel: 'debug',
	router: {
		// '//test.chexiangsit.com:3000': '//localhost:3000'
	}
});

// console.log(localIp);
gulp.task('server', [], () => {
	browserSync.init(null, {
		//proxy: 'http://'+ localIp+':3002',
		// files: [distPath + '/css/**/*.css',  distPath + '/template/**/*.html'],
		//browser: 'chrome',
		//notify: false,
		/*port: 3000,
		server: {
			baseDir: './dist'
		},*/
		server: {
			baseDir: './dist',
			port: 3000,
			// index: './dist/index.html',
			middleware: middleware
		},
		// open: "external",
		startPath:  '/index.html'
	});
});