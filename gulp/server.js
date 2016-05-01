var gulp = require('gulp');
var nodemon = require('gulp-nodemon');

gulp.task('dev.server', function () {
    nodemon({
        script : 'app.js',
        ext : 'js html css',
        ignore : ['asserts*', 'gulp*', 'node_modules*']
    });
});