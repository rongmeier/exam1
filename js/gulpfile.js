const gulp = require('gulp');
const server = require('gulp-webserver');
const cssMin = require('gulp-minify-css');
const htmlMin = require('gulp-htmlmin');
const jsMin = require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('webserver',function(){
    gulp.src('.')
    .pipe({
        port:8080,
        livereload:true
    })
})
gulp.dest('default',['webserver']);

