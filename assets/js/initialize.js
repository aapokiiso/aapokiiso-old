/* ---------------------------- */
/*    ~ Script initializer ~    */
/* ---------------------------- */

/**
*	Initializes document state, resizing etc.
*/

define(['jquery', 'jquery-plugins', 'util/recalc'], function($, plugins, recalc){

	/* ---------------------------- */
	/*    Document init & resize    */
	/* ---------------------------- */

	$(document).ready(function(){
		$('html').removeClass('no-js');
		$('.loader').hide();
		recalc.document();
	});
	
	$(window).resize(function(){
		recalc.document();
	});

	/**
	*	Return jQuery object for convenience.
	*/

	return $;

});