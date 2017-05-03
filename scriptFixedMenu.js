( function( $ ) {
$("document").ready(function($){
	var widthHiddenFlex = $('#sectionHiddenFlexBox').width();
    var nav = $('nav');
	var asideFixed = $('#scrollbar');
	var heightNav = $("#cssmenu").css("height");
	var rightPos = ($(window).width() - (asideFixed.offset().left + asideFixed.outerWidth()));
    var heightWindow = $(window).height();
	
	
	/*Cette fonction permet de repositionné le Aside du site lors d'un changement de résolution*/
	function resizeAside(rightPosTmp)
	{
		document.getElementById("scrollbar").style.top = $("#cssmenu").css("height");;
		document.getElementById("scrollbar").style.right = rightPosTmp +'px';
		document.getElementById("hiddenAside").style.display = "block";	
		document.getElementById("sectionHiddenFlexBox").style.width = widthHiddenFlex + 'px';
	};
	
	/*permet de fixer la hauteur du aside pour les grandes résolutions*/
	$(window).load(function()	{	
		if (window.screen.width > 700 && $(window).width() > 700)	
		{
			asideFixed.css({'height':heightWindow * 0.6});
		}
	});
	
	/*Permet de gere lechangement de taille du navigateur*/
	$( window ).resize(function() {
		asideFixed.css({'height':$(window).height() * 0.6});
		asideFixed.removeClass("f-aside");
		document.getElementById("hiddenAside").style.display = "none";
		
		rightPos = $(window).width() - (asideFixed.offset().left + asideFixed.outerWidth());
		if (window.screen.width > 700 && $(window).width() > 700)	{	
			if($(this).scrollTop() > 125 )
			{
				asideFixed.addClass("f-aside");
				resizeAside();
			}
		}

	});
	
	/*Permet au menu et au aside d'etre toujours visible*/
	$(window).scroll(function () {
		
        if ($(this).scrollTop() > 125 ) {
            nav.addClass("f-nav");			
			
			if (window.screen.width > 700 && $(window).width() > 700) {
				asideFixed.addClass("f-aside");
				resizeAside(rightPos);
			} 
		}
		else {
            nav.removeClass("f-nav");
			
			asideFixed.removeClass("f-aside");
			document.getElementById("hiddenAside").style.display = "none";
        }
    });
	

});
} )( jQuery );