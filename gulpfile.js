const gulp = require('gulp');
const sass = require('gulp-sass');
const rename = require('gulp-rename');

gulp.task('sass', function() {
  return gulp
    .src(['./sass/main.scss'])
    .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass-watch', function() {
  gulp.watch('./sass/**/*.scss', gulp.series('sass'));
});
