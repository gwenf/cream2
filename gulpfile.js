var gulp = require('gulp'),
    gutil = require('gulp-util'),
    browserify = require('gulp-browserify'),
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
