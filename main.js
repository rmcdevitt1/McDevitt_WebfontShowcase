$(document).ready(function(){
	
	$('header nav a').click(function(event){
		event.preventDefault()

		var nameOfSectionToScrollTo = $(this).attr('href')

		$('html,body').stop().animate({
			scrollTop: $(nameOfSectionToScrollTo).offset().top
		}, 500)
	})

	$('.arrows1 a').click(function(e){

		//Stop the click from doing normal click things
		e.preventDefault();

		//Store the current heading font into a variable
		var headingFont = $('.highlight1').css('font-family');

		//Store the current body font into a variable
		var bodyFont = $('.robo-type1').css('font-family');

		//Update the heading with the body font
		$('.highlight1').css({
			'font-family': bodyFont
		});

		//Update the body copy with the heading font
		$('.robo-type1').css({
			'font-family': headingFont
		})
	})






	$('.arrows2 a').click(function(e){

		//Stop the click from doing normal click things
		e.preventDefault();

		//Store the current heading font into a variable
		var headingFont = $('.highlight2').css('font-family');

		//Store the current body font into a variable
		var bodyFont = $('.karla-type2').css('font-family');

		//Update the heading with the body font
		$('.highlight2').css({
			'font-family': bodyFont
		});

		//Update the body copy with the heading font
		$('.karla-type2').css({
			'font-family': headingFont
		})
	})


})