'use strict';

module.exports = function() {
  $.gulp.task('sprite', function() {
    var spriteData = $.gulp.src('./source/sprite/*.png')
      .pipe($.gp.spritesmith({
        imgName: 'assets/img/sprite.png',
        cssName: 'assets/css/sprite.css',
        cssFormat: 'css',
        padding: 20,
      }));
    spriteData.img.pipe($.gulp.dest('./source/sprite'));
    spriteData.css.pipe($.gulp.dest('./source/style/common/'));

    return spriteData;
  });
};