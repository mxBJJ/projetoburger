$(document).ready(function(){
	$('.js--section-features').waypoint(function(direction){

		/*direction indica a direcao 
		do scrolling: para cima, para baixo*/
		/*Se tiver indo para baixo*/
		if(direction=="down"){
			/*Adicionar a classe sticky ao elemento nav*/
			$('nav').addClass('sticky');
		}else{
			$('nav').removeClass('sticky');
		}

	},{
		offset:'60px;'
});

});