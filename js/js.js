$(document).ready(function(){
	$('#f').submit(function(){
		gen();
		return false;
	})
	
	$('#num').blur(gen)
	
	$('#haha').click(function(){
		$(this).fadeOut();
		gen();
	})
	
	gen();
	
	$('#desc .wtf').click(function(){
		$('.text').slideToggle();
	})
	
	$('#vkcomments').click(function(){
		$('#vk_comments').slideToggle();
		return false;
	})
	
	$('#arrowDown').click(function(){
		var i = parseInt($('#num').val());
		$('#num').val(i<3 ? 2 : --i);
		gen();
		return false;
	})
	
	$('#arrowUp').click(function(){
		var i = parseInt($('#num').val());
		$('#num').val(i>29 ? 30 : ++i);
		gen();
		return false;
	})
})

function gen(){
	var num = parseInt($('#num').val());
	
	if (num > 30){
		alert('Хэй, куда столько народу?');
		return false;
	}
	$('#sp').html('');
	
	for (var i=0;i<num;i++)
		$('#sp').append('<div class="spichka"></div>');
	
	$($('.spichka')[getRandomInt(0,num-1)]).addClass('bad');
	
	$('.spichka').click(function(){
		$(this).animate({'top':0,opacity:0.5});
		
		if ($(this).hasClass('bad')){
			$('#haha').fadeIn();
		}
	}).mouseover(function(){
		if ($(this).css('top') == "-80px")
			$(this).css({'top':-65});
	}).mouseout(function(){
		if ($(this).css('top') == "-65px")
			$(this).css({'top':-80});
	})
	/*.mouseover(function(){
			$('#trollface').css({'left':-50});
	}).mouseout(function(){
			$('#trollface').css({'left':-200});
	})*/
}

function getRandomInt(min, max)
{
  return Math.floor(Math.random() * (max - min + 1)) + min;
}