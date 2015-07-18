var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// Directories
var sassDir = 'dev/styles';
var targetCssDir = './dist/styles';

var jsDir = 'dev/scripts';
var targetJsDir = './dist/scripts';


// Compile and minify CSS task
gulp.task('sassCompile', function() {
    return gulp.src(sassDir + '/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(concat('styles.css'))
        .pipe(gulp.dest(targetCssDir))
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(minifyCss())
        .pipe(gulp.dest(targetCssDir));
});

// Concatenate and Minify JS task
gulp.task('scripts', function() {
    return gulp.src(jsDir + '/*.js')
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write())
        .pipe(concat('app.js'))
        .pipe(gulp.dest(targetJsDir))
        .pipe(uglify())
        .pipe(rename({
          suffix: '.min'
        }))
        .pipe(gulp.dest(targetJsDir));
});


gulp.task('watch', function() {
  gulp.watch(sassDir + '/*.scss', ['sassCompile'])
  gulp.watch(jsDir + '/*.js', ['scripts'])
});


gulp.task('default', ['watch', 'sassCompile', 'scripts']);