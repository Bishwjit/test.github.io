(function($) {
	"use strict"

	jQuery(document).ready(function($) {
		$(".slide-item").owlCarousel({
			items: 1,
			loop: true,
			nav: true,
			navText: ["<i class='fa fa-long-arrow-left'><i>", "<i class='fa fa-long-arrow-right'><i>"],
		});
	});


}(jQuery));