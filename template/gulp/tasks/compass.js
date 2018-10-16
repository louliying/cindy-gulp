import gulp from 'gulp';
import browserSync from 'browser-sync';
import compass from 'gulp-compass';
import sourcemaps from 'gulp-sourcemaps';
import {sourcePath, distPath} from '../config';

const reload = browserSync.reload;

gulp.task('compass', ()=> {
	return gulp.src([sourcePath + '/scss/**/*.scss'])
		// .pipe(sourcemaps.init())
		.pipe(compass({
                          /* project: devPath+projectName,
                           config_file: "../../src/sjdb/mobile/config.rb",*/
                           css:  sourcePath +'/css',
                           sass: sourcePath + '/scss',
                           image:  sourcePath,
                           relative: true,
                           http_images_path: distPath
                           // sourcemap: false
                          /* debug: true,
                           style: 'nested',
                           relative: false,
                           http_path: distPath*/
                        }))
		// .pipe(sourcemaps.write())
		.pipe(gulp.dest(sourcePath + "/css"))
                        .pipe(reload({stream:true}));
});