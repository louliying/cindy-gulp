var gulp = require('gulp');
var compass = require('gulp-compass');
var autoprefixer = require('gulp-autoprefixer');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var notify = require('gulp-notify');

var {sourcePath, distPath} = require('../config');

gulp.task('style', ()=> {
    return gulp.src(sourcePath + '/scss/**/*.scss')
                .pipe(compass({
                    css:  sourcePath +'/css',
                    sass: sourcePath + '/scss',
                    image:  sourcePath,
                    relative: true,
                    http_images_path: distPath
                }))
                .pipe(autoprefixer({
                    browsers: ['last 2 versions', 'Firefox >= 20', 'last 2 Explorer versions',  'Android >= 4.0'],
                    cascade: true, //是否美化属性值 默认：true 像这样：
                    remove:true //是否去掉不必要的前缀 默认：true
                }))
                .pipe(gulp.dest(distPath + '/css'))
                .pipe(rename({ suffix: '.min' }))
                .pipe(minifycss())
                .pipe(gulp.dest(distPath + '/css'))
                .pipe(notify({ message: 'Styles task complete' }));
});