jQuery(document).ready(function($){
  
  $(".portfolio-list").masonry({
	  fitWidth: true
  });


  $(".single-portfolio-item").hover(function() {
  	$(this).find(".portfolio-hover h3").toggleClass("animated slideInUp");
  });


  $(".menu-trigger").on('click', function() {
  	$(".offcanvas-menu").addClass("active")
  	$(".offcanvas-menu-overlay").addClass("active")
  	$(".canvas-trigger").addClass("cross")
  });

  $(".menu-close .menu-close-content, .offcanvas-menu-overlay").on('click', function() {
  	$(".offcanvas-menu").removeClass("active")
  	$(".offcanvas-menu-overlay").removeClass("active")
  	$(".canvas-trigger").removeClass("cross")
  });

  $(".header").headroom();

});