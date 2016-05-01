var gulp = require('gulp');
var rename = require('gulp-rename');
var concat = require('gulp-concat');
var minifycss = require('gulp-minify-css');
var minifyhtml = require('gulp-minify-html');

var path = {
    css : 'public/styles/*.css',
    fonts : 'public/fonts/*.*',
    images : 'public/images/*.*',    
    views : [
        'views/layout.html',
        'views/post/*.html', 
        'views/task/*.html',
        'views/training/*.html',
        'views/user/*.html'
        ]
}

gulp.task('source.css', function () {
    return gulp.src(path.css)
        .pipe(concat('app.css'))
        .pipe(minifycss())
        .pipe(gulp.dest('assets'));
});

gulp.task('source.fonts', function () {
    return gulp.src(path.fonts, { base : 'public' })
        .pipe(gulp.dest('assets'));
});

gulp.task('source.images', function () {
    return gulp.src(path.images, { base : 'public' })
        .pipe(gulp.dest('assets'));
});

gulp.task('source.views', ['source.fonts', 'source.images'], function () {
    return gulp.src(path.views)
        .pipe(rename({ dirname : 'views' }))
        .pipe(minifyhtml())
        .pipe(gulp.dest('assets'));
})

gulp.task('watch.source', ['source.css', 'source.views'], function () {
    gulp.watch(path.css, ['source.css']);
    gulp.watch(path.views, ['source.views']);    
});