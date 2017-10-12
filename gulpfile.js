const gulp = require('gulp');
const del = require('del');
const browserSync = require('browser-sync').create();
const pug = require('gulp-pug');
const wait = require('gulp-wait');
// styles
const sass = require('gulp-sass');
const rename = require('gulp-rename');
const sourcemaps = require('gulp-sourcemaps');

// scripts
const gulpWebpack = require('gulp-webpack');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');

//sprite
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const svgSprite = require('gulp-svg-sprite');
const replace = require('gulp-replace');

// для удобства все пути в одном месте
const paths = {
  root: './build',
  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'build/assets/styles/'
  },
  php: {
    src: 'src/php/**/*.php',
    dest: 'build/assets/php/'
  },
  scripts: {
    src: 'src/scripts/**/*.js',
    dest: 'build/assets/scripts/'
  },
  templates: {
    src: 'src/templates/**/*.pug',
    dest: 'build/assets/'
  },
  images: {
    src: 'src/images/**/*.{svg,jpg,png,ico}',
    dest: 'build/assets/images/'
  },
  sprite: {
    src: 'src/sprite/*.svg',
    dest: 'src/images/'
  }
};

// pug
function templates() {
  return gulp
    .src('./src/templates/pages/*.pug')
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest(paths.root))
    .pipe(wait(500))
    .pipe(browserSync.stream({ once: true }));
}

// scss
function styles() {
  return gulp
    .src('./src/styles/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({ outputStyle: 'compressed' }))
    .pipe(sourcemaps.write())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(paths.styles.dest))
    .pipe(browserSync.stream());
}

// webpack
function scripts() {
  return gulp
    .src('src/scripts/app.js')
    .pipe(gulpWebpack(webpackConfig, webpack))
    .pipe(gulp.dest(paths.scripts.dest));
}

// очистка папки build
function clean() {
  return del(paths.root);
}

// просто переносим картинки
function images() {
  return gulp.src(paths.images.src).pipe(gulp.dest(paths.images.dest));
}

function php() {
  return gulp.src(paths.php.src).pipe(gulp.dest(paths.php.dest));
}

//svg спрайт

function toSvg() {
  return gulp
    .src(paths.sprite.src)
    .pipe(
      svgmin({
        js2svg: {
          pretty: true
        }
      })
    )
    .pipe(
      cheerio({
        run: function($) {
          $('[fill]').removeAttr('fill');
          $('[stroke]').removeAttr('stroke');
          $('[style]').removeAttr('style');
        },
        parserOptions: {
          xmlMode: true
        }
      })
    )
    .pipe(replace('&gt;', '>'))
    .pipe(svgSprite({
        mode: {
          symbol: {
            sprite: "../sprite.svg",
            example: {
              dest: '../tmp/spriteSvgDemo.html' // демо html
            }
          }
        }
      }))
      .pipe(gulp.dest(paths.sprite.dest))
}

// следим за src и запускаем нужные таски (компиляция и пр.)
function watch() {
  gulp.watch(paths.scripts.src, scripts);
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.templates.src, templates);
  gulp.watch(paths.images.src, images);
  gulp.watch(paths.php.src, php);
}

// следим за build и релоадим браузер
function server() {
  browserSync.init({
    server: paths.root
  });
  browserSync.watch(
    [paths.root + '/**/*.*'], {ignored: ['**/*.css', '**/*.html']},
    browserSync.reload
  );
}

// экспортируем функции для доступа из терминала (gulp clean)
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.templates = templates;
exports.images = images;
exports.php = php;
exports.watch = watch;
exports.server = server;
exports.toSvg = toSvg;

// сборка и слежка
gulp.task(
  'default',
  gulp.series(
    clean,
    gulp.parallel(styles, scripts, templates, images, php),
    gulp.parallel(watch, server)
  )
);
