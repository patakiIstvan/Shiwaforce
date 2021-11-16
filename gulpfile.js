const postcss = require('gulp-postcss');
const gulp = require('gulp')
const autoprefixer = require('autoprefixer');
const presetEnv = require('postcss-preset-env');

function css() {
    var plugin = [
        autoprefixer(),
        presetEnv()
    ];
    return gulp.src('./css/*.css')
        .pipe(postcss(plugin))
        .pipe(gulp.dest('./dest'));
};

exports.css = css;