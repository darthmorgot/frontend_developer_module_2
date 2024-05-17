const {src, dest, parallel} = require('gulp');
const svgSprite = require('gulp-svg-sprite');
const webp = require('gulp-webp');

function sprite() {
  return src([
    './source/img/icons/*.svg',
    './source/img/logo/*.svg',
  ])
    .pipe(svgSprite({
      shape: {
        dimension: {
          maxWidth: 32,
          maxHeight: 32,
        },
      },
      mode: {
        stack: {
          dest: '',
          sprite: 'sprite.svg'
        },
      }
    }))
    .pipe(dest('./source/img/'));
}

function toWebp() {
  return src(['./source/img/**/*.{jpg,png}', '!./source/img/favicons/*.png'])
    .pipe(webp({quality: 75}))
    .pipe(dest('./source/img/'));
}

exports.sprite = sprite;
exports.toWebp = toWebp;
exports.getSpriteWebp = parallel(sprite, toWebp);
