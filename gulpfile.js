// defining packages

const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();
const minify = require('gulp-minify');
const deploy = require('gulp-gh-pages');
// const options = { 
//     remoteUrl: "https://github.com/ahmedaaziz/ahmedaaziz.github.io.git",
//     branch: "master"};


// tasks

    /** Compile scss to css **/

function style() {
    //1.where is my scss file
    return gulp.src('./src/scss/**/*.scss')
    //2.pass file through sass compiler
    .pipe(sass())
    //3.where do i save the compiled css
    .pipe(gulp.dest('./dist/css'))
    //4.stream changes to all broswer
    .pipe(browserSync.stream());
}

  gulp.task('deploy', function () {
    return gulp.src("./src/**/*")
      .pipe(deploy({ 
        remoteUrl: "https://github.com/ahmedaaziz/ahmedaaziz.github.io.git",
        branch: "master"
      }))
  });


// function deploy(){
//   return gulp.src('./dist/**/*')
//     .pipe(ghPages(options));

// }

function compress(){
    return gulp.src('./src/js/**/*.js')
        .pipe(minify())
        .pipe(gulp.dest('./dist/js'))
            .pipe(browserSync.stream());

}

function watch() {
    browserSync.init({
        server: {
            baseDir: './'
        }
    });
    gulp.watch('./src/scss/**/*.scss',style).on('change',browserSync.reload);
    gulp.watch('./src/js/**/*.js',compress).on('change',browserSync.reload);
    gulp.watch('./*.html').on('change',browserSync.reload);
}
exports.style = style;
exports.compress = compress;
exports.watch = watch;
// exports.deploy = deploy;