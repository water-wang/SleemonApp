var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var annotate = require('gulp-ng-annotate');
var sourcemaps = require('gulp-sourcemaps');

var path = {
    common : [
        'public/scripts/angular.js',
        'public/scripts/angular-route.js',
        'public/scripts/jquery.js',
        'public/scripts/bootstrap.js'
    ],
    app : [
        'views/routes.js',
        'views/post/*.js', 
        'views/task/*.js',
        'views/training/*.js',
        'views/user/*.js'
    ],
    all : function () {
        return Array.prototype.concat.apply(this.common, this.app);
    }
}


gulp.task('js.common', function () {
    return gulp.src(path.common)
        .pipe(concat('common.js'))
        .pipe(uglify())
        .pipe(gulp.dest('assets'));
});

gulp.task('js.app', function () {
    return gulp.src(path.app)
        .pipe(sourcemaps.init())
        .pipe(annotate())
        .pipe(concat('app.js'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets'));
})

gulp.task('watch.js', ['js.common','js.app'], function () {
    gulp.watch(path.all(), ['js.common', 'js.app']);
})