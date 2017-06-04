$(document).ready(function(){
	//CLOSE BUTTON
	var close = {
		id: $('.close'),
		closed: function(){
			close.id.click(function(){
				about_div.id.css('z-index' , -1);
				about_div.id.css('opacity' , 0);
				portfolio_div.id.css('z-index' , -1);
				portfolio_div.id.css('opacity' , 0);
				front_div.id.css('z-index' , -1);
				front_div.id.css('opacity' , 0);
				back_div.id.css('z-index' , -1);
				back_div.id.css('opacity' , 0);
				team_div.id.css('z-index' , -1);
				team_div.id.css('opacity' , 0);
				clients_div.id.css('z-index' , -1);
				clients_div.id.css('opacity' , 0);
				$('.tr,.tl,.br,.bl').css('opacity' , 1);
				$('.tr,.tl,.br,.bl').css('z-index' , 11);
				video.id.css('z-index' , -1);
			})
		}
	}
	//HOME BUTTON
	var home = {
		id: $('.home_right_bottom.tl'),
		go_home: function(){
			home.id.click(function(){
				about_div.id.css('z-index' , -1);
				about_div.id.css('opacity' , 0);
				portfolio_div.id.css('z-index' , -1);
				portfolio_div.id.css('opacity' , 0);
			})
		}
	}

	//ABOUT PAGE
	var about_div = {
		id: $('.about')
	};

	//ABOUT BUTTON
	var about_butt = {
		id: $('.home_right_bottom.tr'),
		show: function(){
			about_butt.id.click(function(){
				about_div.id.css('z-index' , 12);
				about_div.id.animate({opacity: 1});
			});
		}
	};

	//PORTFOLIO PAGE
	var portfolio_div = {
		id: $('.portfolio')
	};

	//PORTFOLIO BUTTON
	var portfolio_butt = {
		id: $('.home_right_bottom.bl'),
		show: function(){
			portfolio_butt.id.click(function(){
				portfolio_div.id.css('z-index' , 12);
				portfolio_div.id.animate({opacity: 1});
			});
		}
	};
	//VIDEO BOX
	var video = {
		id: $('.video')
	};
	//LOGO BUTTON
	var logo = {
		id: $('.logo_box'),
		show_vid: function(){
			logo.id.click(function(){
				$('.tr,.tl,.br,.bl').animate({opacity: 0} , function(){
					$('.tr,.tl,.br,.bl').css('z-index' , -1);
				});
				video.id.css('z-index' , 0)
			});
		}
	};

	//TOOL BOX
	var box_wrap = $('.home_left.top');
	var front = $('.tbox_thirds.front');
	var tbox = $('.tbox_thirds.box');
	var back = $('.tbox_thirds.back');
	box_wrap.mouseenter(function(){
		tbox.stop().animate({opacity: 0} , function(){
			front.stop().animate({left: '10%'});
			back.stop().animate({right: '10%'} , function(){
				front.stop().animate({opacity: 1});
				back.stop().animate({opacity: 1});
			});
		});
	});
	box_wrap.mouseleave(function(){
		front.stop().animate({left: '0'});
		back.stop().animate({right: '0'} , function(){
			tbox.stop().animate({opacity: 1});
			front.stop().animate({opacity: 0.5});
			back.stop().animate({opacity: 0.5});
		});
	});

	//THE TALK
	var talk_wrap = $('.home_left.bottom');
	var team = $('.tbox_thirds.team');
	var talk = $('.tbox_thirds.talk');
	var clients = $('.tbox_thirds.clients');
	talk_wrap.mouseenter(function(){
		talk.stop().animate({opacity: 0} , function(){
			team.stop().animate({left: '10%'});
			clients.stop().animate({right: '10%'} , function(){
				team.stop().animate({opacity: 1});
				clients.stop().animate({opacity: 1});
			});
		});
	});
	talk_wrap.stop().mouseleave(function(){
		team.stop().animate({left: '0'});
		clients.stop().animate({right: '0'} , function(){
			talk.stop().animate({opacity: 1});
			team.stop().animate({opacity: 0.5});
			clients.stop().animate({opacity: 0.5});
		});
	});

	//FRONT END HIDDEN BOX
	var front_div = {
		id: $('.front_end_tool')
	}
	//BACK END HIDDEN BOX
	var back_div = {
		id: $('.back_end_tool')
	}

	//FRONT END BUTTON
	var front_butt = {
		id: $('.tbox_thirds.front'),
		show: function(){
			front_butt.id.click(function(){
				front_div.id.css('z-index' , '11');
				front_div.id.animate({opacity: 1});
				back_div.id.css('z-index' , '-1');
			})
			}
	};
	var back_butt = {
		id: $('.tbox_thirds.back'),
		show: function(){
			back_butt.id.click(function(){
				back_div.id.css('z-index' , '11');
				back_div.id.animate({opacity: 1});
				front_div.id.css('z-index' , '-1');
			})
		}
	};

	//TEAM HIDDEN BOX
	var team_div = {
		id: $('.team_say_box')
	}
	//CLIENTS HIDDEN BOX
	var clients_div = {
		id: $('.clients_say_box')
	}

	//TEAM BUTTON
	var team_butt = {
		id: $('.tbox_thirds.team'),
		show: function(){
			team_butt.id.click(function(){
				team_div.id.css('z-index' , '11');
				team_div.id.animate({opacity: 1});
				clients_div.id.css('z-index' , '-1');
			})
			}
	}//CLIENTS BUTTON
	var clients_butt = {
		id: $('.tbox_thirds.clients'),
		show: function(){
			clients_butt.id.click(function(){
				clients_div.id.css('z-index' , '11');
				clients_div.id.animate({opacity: 1});
				team_div.id.css('z-index' , '-1');
			})
		}
	};
	

	about_butt.show();
	portfolio_butt.show();
	close.closed();
	home.go_home();
	logo.show_vid();
	front_butt.show();
	back_butt.show();
	team_butt.show();
	clients_butt.show();
});