var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var notify = require("gulp-notify");
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');
var shell = require('gulp-shell');

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
    .pipe(gulp.dest(targetCssDir))
    .pipe(notify({ message: 'Styles task complete' }));
});

// Lint JS task
gulp.task('jslint', function() {
  return gulp.src(jsDir + '/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jshint.reporter('fail'))
    .pipe(notify({ message: 'Lint task complete' }));
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
    .pipe(gulp.dest(targetJsDir))
    .pipe(notify({ message: 'Scripts task complete' }));
});

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 8080
  })
});

gulp.task('localtunnel', shell.task([
  'npm install -g localtunnel',
  'lt --port 8080 --subdomain ankvell'
]));

gulp.task('watch', function() {
  gulp.watch(sassDir + '/*.scss', ['sassCompile'])
  gulp.watch(jsDir + '/*.js', ['scripts'])
});


gulp.task('build', ['sassCompile', 'jslint', 'scripts']);
gulp.task('serve', ['watch', 'connect', 'localtunnel']);