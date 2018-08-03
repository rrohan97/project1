jQuery(document).ready(function($) {
    
    // flexslider main
	$('#main-flexslider').flexslider({						
		animation: "swing",
		direction: "horizontal", 
		slideshow: true,
		slideshowSpeed: 2000,
		animationDuration: 2000,
		directionNav: true,
		prevText: '<i class="icon-angle-up icon-2x"></i>',       
		nextText: '<i class="icon-angle-down icon-2x active"></i>', 
		controlNav: false,
		smootheHeight:true,						
		useCSS: false
	});
    });

$(function() {
		var selectedClass = "";
		$(".fil-cat").click(function(){ 
		selectedClass = $(this).attr("data-rel"); 
     $("#portfolio").fadeTo(100, 0.1);
		$("#portfolio div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function() {
      $("."+selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300); 
		
	});
});

$(document).ready(function(){
    $("#testimonial-slider").owlCarousel({
        items:1,
        itemsDesktop:[1000,1],
        itemsDesktopSmall:[979,1],
        itemsTablet:[768,1],
        pagination:true,
        transitionStyle:"backSlide",
        autoPlay:true
    });
    


        
        });
    
    
    
