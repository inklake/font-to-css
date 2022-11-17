// 导入所需文件
const gulp = require('gulp')
const ttf2woff2 = require('gulp-ttf2woff2')
const fontSpider = require('gulp-font-spider')
const injectfont = require('gulp-injectfont')

// 分析 src/index.html 内的文字，并压缩成字库文件， 期间会自动备份原始文件
const fontFrisk = () => gulp.src('./src/index.html').pipe(fontSpider())

// 将分析并压缩过的字库文件转换成 woff2 格式，单独存储
const ttfToWoff2 = () => gulp.src(['./src/fonts/*.ttf']).pipe(ttf2woff2()).pipe(gulp.dest('./src/fonts/woff2/'))

// 将单独存储的 woff2 格式文件转换成 CSS 格式
const fontToCss = () => gulp.src(['./src/fonts/woff2/*']).pipe(injectfont()).pipe(gulp.dest('./dist/'))

// 将以上任务顺序执行
const friskToCss = gulp.series(fontFrisk, ttfToWoff2, fontToCss)

// 导出默认任务
module.exports.default = friskToCss
// 导出字体提取任务
module.exports.fontFrisk = fontFrisk
// 导出 ttf 转 woff2 任务
module.exports.ttfToWoff2 = ttfToWoff2
// 导出 字体转 CSS 任务
module.exports.fontToCss = fontToCss
