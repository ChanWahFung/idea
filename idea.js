$(function(){
	var box = $('.person-box');
	var dot = $('.dot i');
	var gotop = $('.gotop');
	var lbox = $('.link-box');
	var lbtn = $('.link a');
	var ltarget = $('.link-target');
	var btn = $('.nav button');
	
	btn.click(function(){
		if(lbox.css('height')=='50px'){
			lbox.css('height','0px')
		}else{
			lbox.css('height','50px')
		}
	});
	
	lbtn.click(function(){
		var idx = lbtn.index(this);
		var top = ltarget.eq(idx).offset().top;
		$('body,html').animate({scrollTop:top},500);
	})
	
	dot.click(function(){
		var idx = dot.index(this);
		var cardW = $('.person-box .per').width();
		dot.removeAttr('class');
		$(this).attr('class','active');
//		box.animate({
//			transform: 'translateX('+(-870*idx)+'px)',
//		},'slow')
		box.css({
			transform: 'translateX('+(-cardW*idx)+'px)',
		})
		console.log(cardW);
	})

	gotop.click(function(){
		$('body,html').animate({
			scrollTop:'0',
		},'slow')
	})
})
