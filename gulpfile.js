var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var sourcemaps = require('gulp-sourcemaps');
var minifyCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var changed = require('gulp-changed');


//SCSS/CSS


var SCSS_SRC = './src/assets/scss/**/*.scss';
var SCSS_DEST = './src/assets/css';

//compile SCSS
gulp.task('compile_scss', function(done){
    return gulp.src(SCSS_SRC)
    .pipe(changed(SCSS_DEST))
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(SCSS_DEST))
    .pipe(sourcemaps.write(SCSS_DEST))
    .on('end', function(error) {
      if (error) {
        console.log(error)
      }
      done();
    })
});
  
// detect changes in SCSS_SRC
gulp.task('watch_scss', function() {
  gulp.watch(SCSS_SRC, gulp.series('compile_scss'));
});

// Run tasks
gulp.task('default',gulp.series('watch_scss'));