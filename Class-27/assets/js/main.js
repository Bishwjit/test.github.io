(function($) {
	"use strict"

	jQuery(document).ready(function($) {
		$(".portfolio-item").owlCarousel({
			items: 5,
			loop: true,
			nav: true,
			dots: true,
			navText: ["<i class='fa fa-angle-left'><i>", "<i class='fa fa-angle-right'><i>"]
		});
	});


}(jQuery));