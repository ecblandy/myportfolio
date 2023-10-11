const gulp = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const rename = require('gulp-rename')
const uglify = require('gulp-uglify')
const imagemin = require('gulp-imagemin')

function compilaSass() {
    return gulp.src('src/styles/main.scss')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./dist/styles'))
}

function compilaJavaScript(){
    return gulp.src('../src/scripts/*')
    .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('./dist/scripts'))
}

function compilaImagem() {
    return gulp.src('src/img/*')
    .pipe(imagemin())
    .pipe(gulp.dest('./dist/img'))
}


exports.default = gulp.parallel(compilaSass, compilaJavaScript, compilaImagem)
exports.watch = ()=> {
    gulp.watch('src/styles/**/*', gulp.parallel(compilaSass))
    gulp.watch('../src/scripts/*', gulp.parallel(compilaJavaScript))
}