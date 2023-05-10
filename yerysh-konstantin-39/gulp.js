const {src, dest} = require('gulp');
const gulpBabel = require('gulp-babel');
const gulpcCsso = require('gulp-csso');
const gulpEslint = require('gulp-eslint');
const include = require('gulp-file-include');
const imagemin = require('gulp-imagemin');
const minHtml = require('gulp-minify-html');
const { DEFAULT_ECDH_CURVE } = require('tls');
const { DefaultDeserializer } = require('v8');
const browserSync = require('browser-sync').create();

function startGulp () {
  src('src/**.html')
    .pipe()
    .pipe()
}       

