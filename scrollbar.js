(function($){
	
			/*permet de changer la scrollbar de base du navigateur*/
			$(window).load(function(){
				

				$.mCustomScrollbar.defaults.axis="y"; 

				$("#scrollbar").mCustomScrollbar({theme:"minimal-dark"});
			
			});
})(jQuery);