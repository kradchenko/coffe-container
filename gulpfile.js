const gulp = require('gulp');
const concat = require('gulp-concat');

const configuration = {
    paths: {
        src: {
            html: './src/*.html',
            css: './src/static/css/*.css',
        },
        dist: './dist',
    },
};

gulp.task('html', () => {
    gulp.src('./src/*.html').pipe('./dist');
});

gulp.task('css', () => {
    gulp.src('./src/css/*.css').pipe(concat(''));
});
