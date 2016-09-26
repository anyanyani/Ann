'use strict';

module.exports = function() {
	$.gulp.task('sprite:png', function() {
		return $.gulp.src('./source/sprite/icons/*.png')
			.pipe($.gp.spritesmith({
				imgName: 'sprite.png',
				imgPath: '../img/sprite.png',
				cssName: 'sprite.scss'
			}));
		spriteData.img.pipe($.gulp.dest('dev/img/'));
		spriteData.css.pipe($.gulp.dest('dev/scss/'));
	});
};