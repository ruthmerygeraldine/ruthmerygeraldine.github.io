$(document).ready(function(){

	var flag = false;
	var scroll;

	$(window).scroll(function(){
		scroll = $(window).scrollTop();

		if(scroll > 100){
			if(!flag){
				$("#logo").css({"margin-top": "-5px", "width": "400px","height":"50px"});
				$("#logo").attr("src","img/icono/icono3.png")
				$("header").css({"background-color": "rgba(93, 236, 242, 0.7"});
				flag = true;
			}
		}else{
			if(flag){
				$("#logo").css({"margin-top": "150px", "width": "630px","height":"157px"});
				$("#logo").attr("src","img//icono/icono1.png")
				$("header").css({"background-color": "transparent"});
				flag = false;
			}
		}
	});
	$(window).scroll();
	$( "#logo" ).hover(
	  function() {
	  	if($(this).attr('src')=='img/logo/logo1.png'){
	  		$( this ).attr( "src","img/logo/logo1.png");
	  	}
	  }, function() {
	  	if($(this).attr('src')=='img/logo/logo1.png'){
	  		$( this ).attr( "src","img/logo/logo1.png");
	  	}
	  }
	);
	/*var heighVideo = $("video").height();
	$("#banner").css({'height':heighVideo+'px'});*/
	var offsettop = $('.content-about').offset().top-50;
	$('.btn-pink').click(function(){
		$('html,body').animate({
			scrollTop:offsettop
		},1000);
	});
	$( "#profile" ).hover(//borrar desde aqui
	  function() {
	  	if($(this).attr('src')=='img/perfil/perfil1.jpg'){
	  		$( this ).attr( "src","img/perfil/perfil1.jpg");
	  	}
	  }, function() {
	  	if($(this).attr('src')=='img/perfil/perfil1.jpg'){
	  		$( this ).attr( "src","img/perfil/perfil1.jpg");
	  	}
	  }
	);//borrarrrrr



	$('.navbar-nav a').click(function(e){
		var target = $(this).attr('href');
		var offset = $(target).offset().top-$('header').height();
		$('html, body').animate({
			scrollTop:offset
		},1000);
		e.preventDefault();
	});
});
