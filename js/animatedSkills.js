$(document).ready(function(){
	    $('.unity').animate({width:'0%'},2000);
		$('.javaScript').animate({width:'0%'},1500);
		$('.python').animate({width:'0%'},2500);
		$('.photoshop').animate({width:'0%'},3500);
		$('.blender').animate({width:'0%'},2500);
        	});



$(document).scroll(function () {
	var y = $(this).scrollTop();
	var x = $("#section3").position();

	if (y > (x.top - 100)) { // -50 so things don't overlap


        $('.unity').animate({width:'60%'},2000);
		$('.javaScript').animate({width:'40%'},1500);
		$('.python').animate({width:'50%'},2500);
		$('.photoshop').animate({width:'80%'},3500);
		$('.blender').animate({width:'60%'},2500);

	}

});

