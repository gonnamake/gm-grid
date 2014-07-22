var gulp = require('gulp'),
  sass = require('gulp-sass')

gulp.task('sass', function () {
    gulp.src('./src/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./css'));
});
