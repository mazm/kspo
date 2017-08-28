/**
 * Created by JE on 2017-07-05.
 */
// $(window).load(function(){
(function($) {
	/* 메인 비쥬얼 */
	var visualSlide = $('.mv-slide');
	visualSlide.owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: true,
		dotsContainer: '.customDots'
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
	
	var newslSlide = $('.news-slide');
	newslSlide.owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: true
	});

	/* 팝업존 */
	var popupZone = $('.pop-zone');
	popupZone.owlCarousel({
		items: 1,
		loop: false,
		nav: true,
		dots: true,
		margin: 0
	});
})(jQuery);

// });
(function($) {
	$('.faq-list li').getIndex();
	$('.tabMenu li').getIndex();
	$('.customer-list li').getIndex();
	$('.ethical-list li').getIndex();
	$('.open-api li').getIndex();
	$(".status-wrap > div").matchHeight();
})(jQuery);
