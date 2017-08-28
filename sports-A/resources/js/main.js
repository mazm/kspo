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
		items: 1,
		loop: false,
		nav: true,
		dots: true,
		margin: 0,
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
});
(function($) {
	$('.favor-list li').getIndex();
	$('.tabMenu li').getIndex();
})(jQuery);
