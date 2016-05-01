var gulp = require('gulp');

require('./gulp/script');
require('./gulp/source');
require('./gulp/server');

gulp.task('watch', ['watch.js', 'watch.source']);
gulp.task('default', ['watch', 'dev.server']);