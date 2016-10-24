// preloader

$(function() {

	var imgs = [];

	$.each($('*'), function() {
		var
			$this = $(this),
			background = $this.css ('background-image'),
			img = $this.is('img');

		if (background != 'none') {
			var path = background.replace('url("', '').replace('")', '');
				imgs.push(path);
		}

		if (img) {
			var path = $this.attr('src');

			if (path) {
					imgs.push(path);
			}
		}
	});

	var percentsTotal = 1;
	for (var i = 0; i < imgs.length; i++) {
		var image = $('<img>', {
			attr: {
				src: imgs[i]
			}
		});

		image.on('load', function() {
			setPercent(imgs.length, percentsTotal);
			percentsTotal++;
		});

		image.on('error', function() {
			percentsTotal++;
		});

	}

	function setPercent(total, current) {
		var percent = Math.ceil(current / total * 100);

		if (percent >= 100) {
			$('.preloader').fadeOut();
		}

		$('.preloader__percents').text(percent + '%');
	}

});

// slider

$(function() {

	var counter = 1;
	var flag = true;

	$('.slider-controls-top').on('click', function(e) {
		e.preventDefault();

		var  $this = $(this),
			container = $this.closest('.works__slider'),
			items = container.find('.works__slider-item'),
			activeItem = items.filter('.active');
			duration = 300;

		if (flag) {
			flag = false;

			if (counter >= items.length) {
				counter = 0;
			}

			var reqItem = items.eq(counter);

			reqItem.animate({
				'top' : '0%'
			}, duration, function() {
					activeItem.removeClass('active').css('top', '-250%');
					$(this).addClass('active');
					flag = true;
			});

			activeItem.animate({
				'top' : '250%'
			}, duration);

			counter++;
		}

	});

});


// menu

$(document).ready(function() {
		$(".mnu__toggle").click(function() {
			$(".mnu__toggle-hamburger").toggleClass("active");
		});

		$(".mnu__top ul a").click(function() {
			$(".mnu__top").fadeOut(600);
			$(".mnu__toggle-hamburger").toggleClass("active");
			$(".top_text").css("opacity", "1");
		}).append("<span>");

		$(".mnu__toggle").click(function() {
			if ($(".mnu__top").is(":visible")) {
				$(".top_text").css("opacity", "1");
				$(".mnu__top").fadeOut(600);
				$(".mnu__top li a").removeClass("fadeInUp animated");
			} else {
				$(".top_text").css("opacity", ".1");
				$(".mnu__top").fadeIn(600);
				$(".mnu__top li a").addClass("fadeInUp animated");
			};
	});
});


// autorization block (flip)

$('#auth-block').on('click', function() {
    $(this).hide();
    $('.welcome__section-wrap').toggleClass('introduction-block_active-card');
  });

  $('#backHome').on('click', function (e) {
    e.preventDefault();

    $('#auth-block').show();
    $(this).closest('.welcome__section-wrap').toggleClass('introduction-block_active-card');
  });

  // blur

  