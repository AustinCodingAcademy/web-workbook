

(function($) {

	skel
		.breakpoints({
			'desktop': '(min-width: 737px)',
			'tablet': '(min-width: 737px) and (max-width: 1440px), (min-width: 737px) and (max-height: 840px)',
			'mobile': '(max-width: 736px)',
			'desktop-only': '(min-width: 1441px) and (min-height: 841px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	var $window = $(window);

	$window.on('load', function() {

		var	$body = $('body'),
			$document = $(document),
			$form = $('form');

		// Fix: Placeholder polyfill.
			$form.placeholder();

		skel
			.on('+desktop', function() {

				// Accelerate stuff.
					if (skel.vars.mobile)
						$('.reel').css('-webkit-transform', 'translate3d(0,0,0)');

				// Vertically center.
					var wh = $window.height(), w = $('#wrapper');

					w.fadeTo(0, 0.0001);

					w
						.css('top', '50%')
						.css('margin-top', (w.outerHeight() / -2) + 10);

				// Form key fix.
					$form.keydown(function(e) {

						switch (e.keyCode) {

							case 35:
							case 36:
							case 37:
							case 38:
							case 39:
							case 40:
							case 9:
								e.stopPropagation();
								break;

							default:
								break;

						}

					});

				// Main slider.
					$('#main').slidertron({
						viewerSelector:			'.viewer',
						reelSelector:			'.viewer .reel',
						slidesSelector:			'.viewer .reel .slide',
						navNextSelector:		'.next',
						navPreviousSelector:	'.previous',
						viewerOffset:			(skel.breakpoint('tablet').active ? 92 : 102),
						jumpLinksSelector:		'.jumplink',
						hashJump:				true,
						speed:					1000,
						fadeInSpeed:			0,
						arrowsToNav:			true,
						disableSelection:		false,
						onSlideSwitch:			function(slide) {
							$('#main .inner').scrollTop(0);
							var x = $body.scrollTop();
							slide.find('.inner').focus();
							$body.scrollTop(x);
						}
					});

				// Scrolling.
					if (skel.vars.mobile)
						$('article .inner')
							.css('overflow-y', 'scroll')
							.css('-webkit-overflow-scrolling', 'touch');
					else
						$('article').each(function() {
							var t = $(this), ti = t.find('.inner');
							ti.niceScroll({
								body: t,
								zindex:	2
							});
						});

				// Tab key fix.
					$document.keydown(function(e) { if (e.keyCode == 9) e.preventDefault(); });

				// Gallery.
					$('.gallery').poptrox({
						overlayClass: 'poptrox-overlay',
						usePopupDefaultStyling: false,
						usePopupCaption: true,
						usePopupCloser: true,
						usePopupEasyClose: false,
						usePopupNav: true,
						popupCloserText: ''
					});

				w.fadeTo(1000, 1);

			})
			.on('+mobile', function() {

				// Gallery.
					$('.gallery').poptrox({
						overlayClass: 'poptrox-overlay',
						usePopupDefaultStyling: false,
						usePopupCaption: false,
						usePopupCloser: false,
						usePopupEasyClose: true,
						usePopupNav: false,
						useBodyOverflow: false,
						windowMargin: 10,
						overlayOpacity: 0.85,
						popupWidth: 0,
						popupHeight: 0
					});

			})
			.on('-desktop-only -desktop -tablet -mobile', function() {

				window.setTimeout(function() {
					location.reload(true);
				}, 50);

			});

	});

})(jQuery);
