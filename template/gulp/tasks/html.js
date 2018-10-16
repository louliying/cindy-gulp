import gulp from 'gulp';
import contentInclude from 'gulp-content-includer';
import rename from 'gulp-file-rename';
import {sourcePath, distPath} from '../config';

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