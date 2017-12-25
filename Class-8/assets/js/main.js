(function($) {
	"use strict"

	jQuery(document).ready(function($) {
		$(".team-carousel").owlCarousel({
			item: 3,
			loop: true,
			margin: 30,
			nav: true,
			navText: ["<i class='fa fa-angle-left'><i>", "<i class='fa fa-angle-right'><i>"],
		});
	});


}(jQuery));