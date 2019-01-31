var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

browserSync.init({
  server: 'app',
  injectChanges: true
});

gulp.task('sass', function () {
  return gulp.src('app/scss/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.stream({
    match: '**/*.css'
  }));
});

gulp.task('watch', function () {
  gulp.watch('app/scss/*.scss', gulp.series('sass'));
  gulp.watch('app/*.html').on('change', browserSync.reload);
  gulp.watch('app/*.js').on('change', browserSync.reload);

});

gulp.task('hello', function () {
  console.log("Hi Rochel");
})
