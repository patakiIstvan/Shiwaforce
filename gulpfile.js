var gulp = require('gulp');
var postcss = require('gulp-postcss');

var autoprefixer = require('autoprefixer');
var color_rgba_fallback = require('postcss-color-rgba-fallback');
var opacity = require('postcss-opacity');
var pseudoelements = require('postcss-pseudoelements');
var vmin = require('postcss-vmin');
var pixrem = require('pixrem');
var will_change = require('postcss-will-change');

const babel = require('gulp-babel');

gulp.task('css', function () {
    var plugins = [
        will_change,
		autoprefixer({browsers: ['last 2 version']}),
		color_rgba_fallback,
		opacity,
		pseudoelements,
		vmin,
		pixrem
        ];

    return gulp.src('./src/*.css')
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dest'));
});

 
gulp.task('babel', () =>
    gulp.src('src/app.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(gulp.dest('dest'))
);