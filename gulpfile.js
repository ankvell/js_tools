var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

// Directories
var sassDir = 'dev/styles';
var targetCssDir = './dist/styles';

var jsDir = 'dev/scripts';
var targetJsDir = './dist/scripts';



gulp.task('sassCompile', function() {
    return gulp.src(sassDir + '/*.scss')
        .pipe(sass())
        .pipe(gulp.dest(targetCssDir));
});

gulp.task('scripts', function() {
    return gulp.src(jsDir + '/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest(targetJsDir))
});


gulp.task('default', ['sassCompile', 'scripts']);