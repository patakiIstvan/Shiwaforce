const postcss = require('gulp-postcss');
const gulp = require('gulp')
const autoprefixer = require('autoprefixer');
const level4 = require('level4');

function css() {
    var plugin = [
        autoprefixer(),
        level4()
    ];
    return gulp.src('./css/*.css')
        .pipe(postcss(plugin))
        .pipe(gulp.dest('./dest'));
};

exports.css = css;