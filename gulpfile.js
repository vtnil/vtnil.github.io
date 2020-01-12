let gulp = require('gulp');
let minifycss = require('gulp-minify-css');
let uglify = require('gulp-uglify');
let htmlmin = require('gulp-htmlmin');
let htmlclean = require('gulp-htmlclean');


gulp.task('minify-css', function() {
    return gulp.src('./public/**/*.css')
        .pipe(minifycss())
        .pipe(gulp.dest('./public'));
});


gulp.task('minify-html', function() {
  return gulp.src('./public/**/*.html')
    .pipe(htmlclean())
    .pipe(htmlmin({
         removeComments: true,
         minifyJS: true,
         minifyCSS: true,
         minifyURLs: true,
    }))
    .pipe(gulp.dest('./public'))
});


gulp.task('minify-js', function() {
    return gulp.src('./public/**/*.js')
        .pipe(uglify())
        .pipe(gulp.dest('./public'));
});


gulp.task('default', [
    'minify-html','minify-css','minify-js'
]);
