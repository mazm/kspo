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
		dots: true,
		navContainerClass: 'customNav',
	});
	$('.playBtn').click();
	/* 국민체력 100 */
	var directLink = $('.reservation-slide');
	directLink.owlCarousel({
		loop: false,
		nav: false,
		dots: true,
		margin: 0,
		mouseDrag: false,
		responsiveRefreshRate: 0,
		autoplay: false,
		autoplayTimeout: 3000,
		autoplayHoverPause: true,
		responsive:{
			0:{
				items:1
			},
			576:{
				items:2
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
		margin: 10,
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
	$('.faq-list li').getIndex();
	$('.tabMenu li').getIndex();
})(jQuery);
