var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
    compass = require('gulp-compass'),
    concat = require('gulp-concat');


//this is just for testing
gulp.task('log', function(){
  gutil.log('workflowing test');
});


var jsSources = [
  'components/scripts/another.js',
  'components/scripts/other.js'
];

gulp.task('js', function() {
  gulp.src(jsSources)
    .pipe(concat('script.js'))
    .pipe(browserify())
    .pipe(gulp.dest('builds/development/js'));
});

var sassSources = ['components/sass/style.scss'];

gulp.task('compass', function() {
  gulp.src(sassSources)
    .pipe(compass({
      sass: 'components/sass',
      image: 'builds/development/images',
      style: 'expanded'
    }))
    .on('error', gutil.log) //outputs errors to console
    .pipe(gulp.dest('builds/development/css'));
});
