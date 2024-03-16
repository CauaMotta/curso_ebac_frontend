const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const uglify = require('gulp-uglify');
const imagemin = require('gulp-imagemin');
const obfuscate = require('gulp-obfuscate');


function compilaSass() {
    return gulp.src('./source/style/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(sourcemaps.write('./maps'))
        .pipe(gulp.dest('./build/styles'));
}

function comprimeJs() {
    return gulp.src('./source/scripts/*.js')
        .pipe(uglify())
        .pipe(obfuscate())
        .pipe(gulp.dest('./build/scripts'));
}

function comprimeImgs() {
    return gulp.src('./source/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./build/images'));
}

exports.default = () => {
    gulp.watch('./source/style', { ignoreInitial: false }, gulp.series(compilaSass));
    gulp.watch('./source/scripts', { ignoreInitial: false }, gulp.series(comprimeJs));
    gulp.watch('./source/images', { ignoreInitial: false }, gulp.series(comprimeImgs));
}
