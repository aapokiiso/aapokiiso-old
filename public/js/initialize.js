/* ---------------------------- */
/*    ~ Script initializer ~    */
/* ---------------------------- */

/**
*	Initializes document state, resizing etc.
*/

define(function(require){

	/* ------------------ */
	/*    Dependencies    */
	/* ------------------ */

	var $ = require('jquery');
	var plugins = require('plugins');

	var calculate = {
		document: require('utilities/calculate/document')
	}

	/* ---------------------------- */
	/*    Document init & resize    */
	/* ---------------------------- */

	$(document).ready(function(){
		$('html').removeClass('no-js');
		calculate.document();
	});
	
	$(window).resize(function(){
		calculate.document();
	});

	/**
	*	Return jQuery object for convenience.
	*/

	return $;

});
