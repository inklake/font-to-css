const gulp = require('gulp')
const ttf2woff2 = require('gulp-ttf2woff2')
const fontSpider = require('gulp-font-spider')
const injectfont = require('gulp-injectfont')

const fontFrisk = () => gulp.src('./src/index.html').pipe(fontSpider())

const toWoff2 = () => gulp.src(['./src/fonts/*.ttf']).pipe(ttf2woff2()).pipe(gulp.dest('./src/fonts/woff2/'))

const toCss = () => gulp.src(['./src/fonts/woff2/*']).pipe(injectfont()).pipe(gulp.dest('./dist/'))

module.exports.default = gulp.series(fontFrisk, toWoff2, toCss)
