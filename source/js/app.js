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

		image.on({
			load : function () {
				setPercent(imgs.length, percentsTotal);
				percentsTotal++;
			},

			error : function () {
				percentsTotal++;
			}
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
function heightDetect() {
	$(".header").css("height", $(window).height());

	heightDetect();
	$(window).resize(function() {
			heightDetect();
	});
};
		
	

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
$('.welcome__nav-login').on('click', function() {
		$(this).hide();
	});
	$('#backHome').on('click', function (e) {
		e.preventDefault();

		$('.welcome__nav-btn').show();
  });

  // blur


// CIRCLE	
$(window)
$('#percent').on('change', function(){
  var val = parseInt($(this).val());
  var $circle = $('#svg #bar');
  
  if (isNaN(val)) {
   val = 100; 
  }
  else{
    var r = $circle.attr('r');
    var c = Math.PI*(r*2);
   
    if (val < 0) { val = 0;}
    if (val > 100) { val = 100;}
    
    var pct = ((100-val)/100)*c;
    
    $circle.css({ strokeDashoffset: pct});
    
    $('#cont').attr('data-pct',val);
  }
});


// map

function initMap() {

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    scrollwheel:  false,
    center: new google.maps.LatLng(55.044526, 82.909025),
    	styles: [
				{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"visibility":"on"},
				{"color":"#6c9c5a"}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"visibility":"on"},
				{"hue":"#f2f2f2"},{"color":"#f2f2f2"}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":100},{"visibility":"simplified"}]},{"featureType":"road","elementType":"labels",
          "stylers":[{"visibility":"off"}]},{"featureType":"transit.line","elementType":"geometry","stylers":[{"visibility":"on"},{"lightness":700}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#638F54"}]}]
  });

	var marker = new google.maps.Marker({
		position: new google.maps.LatLng(55.043726, 82.922126),
		map: map,
		draggable: true,
		animation: google.maps.Animation.DROP,
		title: 'Hi, i live here!',
		icon: '/assets/img/map_marker.png',
  });

}