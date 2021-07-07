"use strict";
var gulp = require('gulp'),
    del = require('del'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    concat = require('gulp-concat'),
    deporder = require('gulp-deporder'),
    terser = require('gulp-terser'),
    imagemin = require('gulp-imagemin'),
    { series, parallel } = require('gulp');
  

// Compile Scss into Css
function style(){
    //where is my scss file 
    return gulp.src('./assets/scss/*.scss')
    // pas that file  through sass compiler 
    .pipe(sass().on('error',sass.logError))
    .pipe(sass())
    //where i do save my files 
    .pipe(gulp.dest('./dist/assets/css'))
    // stream changes to all browser
    .pipe(browserSync.stream());
}

// Minify Images
function minifyImages(){
  return gulp.src('./assets/images/**/**')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/images'));

}

function js() {

  return gulp.src('./assets/js/**/*')
    .pipe(deporder())
    .pipe(concat('main.js'))
    .pipe(terser())
    .pipe(gulp.dest('./dist/assets/js'));

}


// Clean task
function clean(){
    return del(['dist']);
}

// watch all changes on localhost
function watch(){
  browserSync.init({
    server:{
      baseDir: "./",
      }
    // port:3000,
    // proxy: {
    //   target: "localhost:8080/back-end/"
    // }
  });


  gulp.watch('./assets/scss/**/*.scss', style);
  gulp.watch('*.html').on('change',browserSync.reload);
  gulp.watch('./assets/js/**/*.js',js);
  gulp.watch('./assets/js/**/*.js').on('change',browserSync.reload);
  gulp.watch('./assets/images/**/**',minifyImages);
  gulp.watch('./assets/images/**/**').on('change',browserSync.reload);
  
}

exports.style = style;
exports.minifyImages = minifyImages;
exports.clean = clean;
exports.js = js;
exports.watch = watch;
exports.default = series(parallel(style,minifyImages,js),watch);