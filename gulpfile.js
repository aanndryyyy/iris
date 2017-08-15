var gulp          = require('gulp');
var sass          = require('gulp-sass');
var notify        = require("gulp-notify");
var browserSync   = require('browser-sync').create();

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(notify({title: "SASS", message: "SASS Compiled! (<%= file.relative %>)", timeout: 2}))
    .pipe(gulp.dest('./src/css'))
    .pipe(browserSync.reload({ stream:true }));
});

gulp.task('default', function() {
  browserSync.init({
    proxy: 'iris.dev',
    notify: false,
    open: false
  });

  gulp.watch('./src/scss/**/*.scss', ['sass']);
  gulp.watch("**/*.php").on('change', browserSync.reload);
});