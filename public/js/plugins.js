/* ---------------------------- */
/*    ~ jQuery initializer ~    */
/* ---------------------------- */

/**
*	Loads jQuery and attaches components and utilities to it.
*	Because the jQuery plugins/components etc. attach themselves straight to the global jQuery object, we don't need to do anything special with them.
*	When this module is loaded once, every other module has access to these parts just by requiring jQuery.
*/

define(
	[
		'jquery',
		'transit'
	]
);
