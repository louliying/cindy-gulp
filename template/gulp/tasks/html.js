var gulp = require('gulp');
var contentInclude = require('gulp-content-includer');
var rename = require('gulp-file-rename');
var {sourcePath, distPath} = require('../config');

gulp.task('include-html', ()=> {
    return gulp.src([
            sourcePath + '/temp/**/*.debug.html'
            //,'!'+devPath+'/html/'+projectName+'/template/'+'error.jade'
        ])
        .pipe(contentInclude({
			includerReg: /<inline.+?src=["']([^"']+?)["']\s*?\/>/g
		}))
		.pipe(rename({replacename: {oldtxt:'.debug',newtxt:''}}))
        .pipe(gulp.dest(distPath));

        //gulp.watch(devPath+'/html/'+projectName+"/*.html").on('change', reload);
});