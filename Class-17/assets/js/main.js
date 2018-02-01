jQuery(document).ready(function($){
	
	$(".portfolio-filter li").on('click', function(){
		var filterData = $(this).attr("data-filter");
		
		$(".portfolio-list").isotope({
			filter: filterData,			
		});
		$(".portfolio-filter li").removeClass('active');
		$(this).addClass('active');
	});

	$(".portfolio-list").isotope({
		itemSelector: '.portfolio-item',
		percentPosition: true,
		masonry: {
			// use outer width of grid-sizer for columnWidth
			columnWidth: '.portfolio-item',
			horizontalOrder: true
		}
	});


    $("body,.img-warp").perfectScrollbar();

    $(".perfect-scrollbar").perfectScrollbar({
        theme: 'blue-theme'
    });

    $(".section-padding").perfectScrollbar({
        theme: 'blue-theme'
    });
});