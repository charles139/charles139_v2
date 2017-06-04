$(window).on('load resize', function(){
	var height = $(window).height();
	var width = $(window).width();
	var home_wrapper = $('.home_wrapper');
	var home_flex_wrap = $('.home_flex_wrap');
	var home_top = $('.home_top');
	var home_bottom = $('.home_bottom');
	var home_left = $('.home_left');
	var home_right_top = $('.home_right_top');
	var home_right_bottom = $('.home_right_bottom');

	console.log("Width is " , width);

	function home_nav_size () {
		if (width > 767) {
			home_wrapper.css('height' , height);
		}
		home_top.css('height' , height/10);
		home_bottom.css('height' , height/10);
		home_left.css('height' , height/4);
		home_right_top.css('height' , (height*0.75)/2);
		home_right_bottom.css('height' , (height*0.75)/4);
	}
	home_nav_size();

});