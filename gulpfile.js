// defining packages

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const ghPages = require('gulp-gh-pages');


// tasks

    /** Compile scss to css **/

function style() {
    //1.where is my scss file
    return gulp.src('./scss/**/*.scss')
    //2.pass file through sass compiler
    .pipe(sass())
    //3.where do i save the compiled css
    .pipe(gulp.dest('./dist/css'))
    //4.stream changes to all broswer
    .pipe(browserSync.stream());
}

function deploy(){
  return gulp.src('./dist/**/*')
    .pipe(ghPages());

}



function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./scss/**/*.scss',style).on('change',browserSync.reload);
    gulp.watch('./*.html').on('change',browserSync.reload);
    gulp.watch('./js/**/*.js').on('change',browserSync.reload);
}
exports.style = style;
exports.deploy = deploy;
exports.watch = watch;