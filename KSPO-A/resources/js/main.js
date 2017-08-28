/**
 * Created by JE on 2017-07-05.
 */
$(window).load(function(){
	
	/* 메인 비쥬얼 */
	var visualSlide = $('.mv-slide');
	visualSlide.owlCarousel({
		items: 1,
		loop: false,
		nav: true,
		dots: false,
		mouseDrag: false,
		navContainerClass: 'customNav',
		responsiveRefreshRate: 0,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
	});
	$('.playBtn').on('click', function(e) {
		$(this).toggleClass('play');
		if( $( this ).is(".play" ) ) {
			visualSlide.trigger('play.owl.autoplay',[3000]);
			$(this).children('.sr-only').html('stop');
		} else {
			visualSlide.trigger('stop.owl.autoplay');
			$(this).children('.sr-only').html('play');
		}
		e.preventDefault();
	});
	$('.playBtn').click();
	/* 팝업존 */
	var popupZone = $('.pop-zone');
	popupZone.owlCarousel({
		loop: false,
		nav: true,
		dots: true,
		margin: 5,
		// dotsContainer: '#customDots',
		responsiveRefreshRate: 0,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:2
			}
		}
	});
	/* 국민체력 100 */
	var directLink = $('.dlink');
	directLink.owlCarousel({
		loop: false,
		nav: true,
		dots: true,
		margin: 5,
		mouseDrag: false,
		dotsContainer: '#customDots',
		responsiveRefreshRate: 0,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:1
			},
			991:{
				items:1
			},
			992:{
				items:3
			}
		}
	});

	/* 통합소식 */
	var totalNews = $('.total-news-slide');
	totalNews.owlCarousel({
		loop: false,
		nav: true,
		dots: true,
		margin: 5,
		mouseDrag: false,
		dotsContainer: '#customDots',
		responsiveRefreshRate: 0,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		onInitialize: callback,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},
			1000:{
				items:4
			}
		}
	});
	/* KSPO LIVE */
	var blog = $('.live-carousel');
	blog.owlCarousel({
		loop: false,
		nav: true,
		dots: true,
		margin: 13,
		mouseDrag: false,
		dotsContainer: '#customDots',
		responsiveRefreshRate: 0,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		onInitialize: callback,
		responsive:{
			0:{
				items:1
			},
			768:{
				items:3
			},
			1000:{
				items:4
			}
		}
	});
	function callback(event) {
		$(".multi-ellipsis").dotdotdot();
	}

	
});
(function($) {
	$('.favor-list li').getIndex();
	$('.tabMenu li').getIndex();
})(jQuery);
