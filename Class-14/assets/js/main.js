(function($) {
	"use strict"

	jQuery(document).ready(function($) {
		
		var homepageSlide = $(".homepage-slide");
			homepageSlide.owlCarousel({
				items: 1,
				autoplay: true,
				loop: true,
				nav: true,
				dots: true,
				navText: ["<i class='fa fa-long-arrow-left'><i>", "<i class='fa fa-long-arrow-right'><i>"]
			})

		
		homepageSlide.on('translated.owl.carousel', function(event) {
		    $(".welcome-area-text h4").addClass("animated bounceIn");
		    $(".welcome-area-text h2").addClass("animated zoomIn");
		    $(".welcome-area-text p").addClass("animated slideInUp");
		});

		homepageSlide.on('translate.owl.carousel', function(event) {
		    $(".welcome-area-text h4").removeClass("animated bounceIn");
		    $(".welcome-area-text h2").removeClass("animated zoomIn");
		    $(".welcome-area-text p").removeClass("animated slideInUp");
		});
	});


/*============================================================
			Video-Background
===============================================================*/
	$('.video-bg').YTPlayer({
	    fitToBackground: true,
	    videoId: 'LSmgKRx5pBo'
	});

/*============================================================
			Video-Play
===============================================================*/
	jQuery(document).ready(function($) {
		$(".js-modal-btn").modalVideo();
	});

}(jQuery));