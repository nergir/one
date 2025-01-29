function calculate(){

	var h;
	if (self.innerHeight){h = self.innerHeight;}
	else if ((document.documentElement != null) && (document.documentElement.clientHeight != null)){h = document.documentElement.clientHeight;}
	else if (document.body){h = document.body.clientHeight;}
	var img_height = h - 149;	
	var img_width = $('.slider-inner').width();
	$('.slider-inner').css('height',img_height);	
	var ratio = img_width/img_height;
	if (ratio > 1.47){
		$('.slider-inner img').css('height',img_height);
		$('.slider-inner img').css('width','auto');			
	}else{	
		$('.slider-inner img').css('width',img_width);	
		$('.slider-inner img').css('height','auto');		
	}
	var img_width2 = $('.slider-inner li:first').width();
	to_left = ((img_width-img_width2)/2);
	$('.slider-inner li').css('left',to_left+'px');	
}

function startBannerCarousel(){
    bannerTimer = null;
    activeBanner = 0;
    bannerCount = $(".flash .banners li").length;
    if (bannerCount > 1) {
        bannerContainer = $(".flash");
		$(".banners li", bannerContainer).hide();
		$(".banners li:first", bannerContainer).fadeIn(1000);
        bannerTimer = setInterval("rotateBannerCarousel()", 5000);
    }
}

function rotateBannerCarousel(){
	$(".banners li:eq(" + activeBanner + ")", bannerContainer).fadeOut(1000, function(){
		activeBanner++;
		if (activeBanner >= bannerCount) {
			activeBanner = 0;
		}
		$(".banners li:eq(" + activeBanner + ")", bannerContainer).fadeIn(1000);
	});
    
}

$('document').ready(function(){	

	calculate(); 
	
    startBannerCarousel();	
	
	$(window).resize(function() {
		calculate(); 
	});		
	
});