


LDNavigator = (function(){
	var history = ['#main'];
	
	var _init = function(){
		$('.navigator').on('click', function(e){
			e.preventDefault();
			var target = $(this).attr('data-target');

			target = '#'+target;			
			var prev = history[history.length-1];
			history.push(target);
			
			_goTo(target, prev);
		});
		
	}
	
	var _goTo = function(target, prev){
		tau.changePage($(target));
	}
	
	var _goBack = function(){
		if(history.length == 1){
			tizen.application.getCurrentApplication().exit();
		} else {
			var prev = history[history.length-1];
			history.pop();
			_goTo(history[history.length-1], prev);
		}
	}

	return {
		init : _init,
		goBack : _goBack
	}
})(jQuery);


( function () {
	window.addEventListener( 'tizenhwkey', function( ev ) {
		if( ev.keyName == "back" ) {
			LDNavigator.goBack();
		}
	} );
} () );

LDNavigator.init();

$(document).ready(function(){
	tau.openPopup($('#main-alert'));
})
