	var $lnbList =  $('.lnb-list');
	var $lnb = $('.lnb-list > li > a');
	var $searchIcon = $('.search a');
	var $lnbWrap = $('.lnb-wrap');
	var $lnbInner = $('.lnb-inner');
	var $sm = $('.sm');
	var $smBg = $('.sm-bg');
	var $searchWrap = $('.search-wrap');
	var $totalNewsWrap = $('.totalNews');
	var $totalNews = $('.total-news a');
	
	var overlayShow = function() {
		overlayHide();
		var docHeight = $(document).height();
		$("body").append("<div id='overlay'></div>");
		$("#overlay").height(docHeight);
	};
	var overlayHide = function() {
		var docHeight = $(document).height();
		$("#overlay").remove();
	};

	$('a[data-rel="layFamilySite"]').on('click', function(e){
		var $self = $(this);
		var $target = $($(this).attr('href'));
		$('.foot-sm').each(function() {
			$('.foot-sm').hide();
		});
		$(this).show();
		// $('a[data-rel="layFamilySite"]').removeClass('open');
		$('a[data-rel="layRelativeSite"]').removeClass('open');
		$('a[data-rel="layUsefullSite"]').removeClass('open');
		$(this).toggleClass('open');
		if( $(this).is('.open')) {
			$target.attr('tabindex', '0').show().focus();
		} else {
			$target.hide();
			// $self.focus();
			$target.removeAttr('tabindex');
		}
		$target.find(".x").on('click focusout', function(e){
			$target.hide();
			$self.removeClass('open');
			$target.removeAttr('tabindex');
			$self.focus();
			e.preventDefault();
		});
		e.preventDefault();
	});
	$('a[data-rel="layRelativeSite"]').on('click', function(e){
		var $self = $(this);
		var $target = $($(this).attr('href'));
		$('.foot-sm').each(function() {
			$('.foot-sm').hide();
		});
		$(this).show();
		$('a[data-rel="layFamilySite"]').removeClass('open');
		// $('a[data-rel="layRelativeSite"]').removeClass('open');
		$('a[data-rel="layUsefullSite"]').removeClass('open');

		$(this).toggleClass('open');
		
		if( $(this).is('.open')) {
			$target.attr('tabindex', '0').show().focus();
		} else {
			$target.hide();
			// $self.focus();
			$target.removeAttr('tabindex');
		}
		$target.find(".x").on('click focusout', function(e){
			$target.hide();
			$self.removeClass('open');
			$target.removeAttr('tabindex');
			$self.focus();
			e.preventDefault();
		});
		e.preventDefault();
	});
	$('a[data-rel="layUsefullSite"]').on('click', function(e){
		var $self = $(this);
		var $target = $($(this).attr('href'));
		$('.foot-sm').each(function() {
			$('.foot-sm').hide();
		});
		$(this).show();
		$('a[data-rel="layFamilySite"]').removeClass('open');
		$('a[data-rel="layRelativeSite"]').removeClass('open');
		// $('a[data-rel="layUsefullSite"]').removeClass('open');
		$(this).toggleClass('open');
		
		if( $(this).is('.open')) {
			$target.attr('tabindex', '0').show().focus();
		} else {
			$target.hide();
			// $self.focus();
			$target.removeAttr('tabindex');
		}
		$target.find(".x").on('click focusout', function(e){
			$target.hide();
			$self.removeClass('open');
			$target.removeAttr('tabindex');
			$self.focus();
			e.preventDefault();
		});
		e.preventDefault();
	});

	// 통합뉴스
	$('a[data-rel="totalNews"]').on('click', function(e){
		var $self = $(this);
		var $target = $($(this).attr('href'));
		$(this).toggleClass('open');
		searchHide();
		if( $(this).is('.open')) {
			$target.attr('tabindex', '0').slideDown('normal', function() { overlayShow()}).focus();
		} else {
			$target.slideUp();
			// $self.focus();
			$target.removeAttr('tabindex');
			overlayHide();
		}
		$target.find(".x").on('click focusout', function(){
			$target.slideUp();
			$self.removeClass('open');
			$target.removeAttr('tabindex');
			$self.focus();
			overlayHide();
		});
		e.preventDefault();
	});
	// 검색
	$('a[data-rel="laySearchBox"]').on('click', function(e){
		var $self = $(this);
		var $target = $($(this).attr('href'));
		$(this).toggleClass('open');
		// $lnbWrap.removeClass('active');
		allNewsHide();
		
		if( $(this).is('.open')) {
			$target.attr('tabindex', '0').slideDown('normal', function() { overlayShow()}).focus();
		} else {
			$target.slideUp();
			$target.removeAttr('tabindex');
			// $self.focus();
			overlayHide();
		}
		$target.find(".x").on('click focusout', function(){
			$target.slideUp();
			$self.removeClass('open');
			$target.removeAttr('tabindex');
			$self.focus();
			overlayHide();
		});
		e.preventDefault();
	});
	// LNB
	$('a[data-rel="layLnb"]').on('click', function(e){
		var $self = $(this);
		var $target = $($(this).attr('href'));
		$target.attr('tabindex', '0').show().focus();
		searchHide();
		allNewsHide();
		overlayShow();
		$target.find(".x").on('click focusout', function(){
			$lnbWrap.removeClass('active');
			$sm.removeClass('active');
			$target.hide();
			$self.focus();
			$target.removeAttr('tabindex');
			overlayHide();
		});
		e.preventDefault();
	});
	
	var searchHide = function() {
		$searchIcon.removeClass('open');
		$searchWrap.slideUp();
	};
	var allNewsHide = function() {
		$totalNews.removeClass('open');
		$totalNewsWrap.slideUp();
	};
	var mobileFunc = function() {
		$('body').addClass('mobile').removeClass('pc');
		$lnb.on('click', function(e) {
			$lnb.each(function() {
				$(this).removeClass('act');
			});
			$(this).addClass('act');
			$sm.removeClass('active');
			$(this).next('.sm').addClass('active');
			e.preventDefault();
		});
		$(".hamburger").on('click', function(){
			$lnbWrap.addClass('active');
			$lnb.removeClass('act');
			$sm.removeClass('active');
			$('.lnb-list > li:first-child > a:first-child').addClass('act');
			$('.lnb-list > li:first-child > a:first-child + .sm').addClass('active');
		});
		$(".close").on('click', function(){
			$lnbWrap.removeClass('active');
		});
		
	};
	var resetMobile = function() {
		// $(".hamburger").off('click');
		// $('.lnb-wrap').removeClass('active');
		// $lnb.off('click');
		$lnb.each(function() {
			$(this).removeClass('act');
		});
	};
	var webFunc = function() {
		overlayHide();
		$('body').addClass('pc').removeClass('mobile');
		$lnbWrap.removeClass('active');
		$lnbInner.css({'display': 'block'});
		$lnb.off('click');
		$sm.removeClass('active');
		$lnb.on('mouseenter focusin', function() {
			// $('.sm').stop().slideDown();
			$lnbWrap.addClass('active');
			$sm.addClass('active');
			$smBg.css({'height': $('.sm').outerHeight() });
			$searchIcon.removeClass('open');
			$searchWrap.hide();
		});
		$lnbList.on('mouseleave', function() {
			$lnbWrap.removeClass('active');
			$sm.removeClass('active');
			$smBg.css({'height': $('.sm').outerHeight() });
			$searchIcon.removeClass('open');
			$searchWrap.hide();
		});
		/*$('.search a').on('focusout', function() {
			$lnbWrap.removeClass('active');
			$sm.removeClass('active');
		});*/
		
		$searchIcon.on('focusin', function() {
			// $searchWrap.hide();
			// $searchIcon.removeClass('open');
			$lnbWrap.removeClass('active');
			$sm.removeClass('active');
			$smBg.css({'height': $('.sm').outerHeight() });
		})
	};
	var resetPC = function() {
		$lnb.off('mouseenter focusin');
		$lnbList.off('mouseleave');
	};
	
	var eventload = {
		add: function(elem, type, fn) {
			if (elem.attachEvent) {
				elem['e'+type+fn] = fn;
				elem[type+fn] = function() {elem['e'+type+fn](window.event);}
				elem.attachEvent('on'+type, elem[type+fn]);
			} else
				elem.addEventListener(type, fn, false);
		}
	};
	var currentMQ = "unknown";
	var mqSync = function(){
		if (window.opera) {
			var activeMQ = window.getComputedStyle(document.body,':before').getPropertyValue('content');
		}
		else if (window.getComputedStyle) {
			var activeMQ = window.getComputedStyle(document.head,null).getPropertyValue('font-family');
		}
		else {
			window.getCompStyle = function(el, pseudo) {
				this.el = el;
				this.getPropertyValue = function(prop) {
					var re = /(\-([a-z]){1})/g;
					if (prop == 'float') prop = 'styleFloat';
					if (re.test(prop)) {
						prop = prop.replace(re, function () {
							return arguments[2].toUpperCase();
						});
					}
					return el.currentStyle[prop] ? el.currentStyle[prop] : null;
				}
				return this;
			};
			var compStyle = window.getCompStyle(document.getElementsByTagName('head')[0], "");
			var activeMQ = compStyle.getPropertyValue("font-family");
		}
		activeMQ = activeMQ.replace(/"/g, "");
		activeMQ = activeMQ.replace(/'/g, "");

		if (activeMQ != currentMQ) {
			if (activeMQ === 'Mobile') {
				currentMQ = activeMQ;
				// Add code you want to sync with this breakpoint
				// document.getElementById('msg').innerHTML = ('Active media query: <br><strong>' + currentMQ + '</strong>');
				// console.log(currentMQ);
				resetPC();
				mobileFunc();

			}
			if (activeMQ === "Large") {
				currentMQ = activeMQ;
				resetMobile();
				webFunc();
			}
		}
		
	};
