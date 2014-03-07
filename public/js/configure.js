/* --------------------------------- */
/*    ~ RequireJS configuration ~    */
/* --------------------------------- */

/**
*	Path descriptions:
*	
*	/app/ contains main application js.
*	/comps/ contains js for different components.
*	/lib/ contains external libraries.
*	/util/ contains utility function collections.
*/

/* ------------------- */
/*    JQuery source    */
/* ------------------- */

/**
*	Applies for non-IE (well actually >= IE9) browsers. 
*/

var jquery_source = "//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min";

var bodyclass = document.documentElement.className;

if(bodyclass.indexOf('ie') >= 0){

	/**
	*	Applies for IE8 and below, since jQuery 2.x supports IE only from IE9 upwards.
	*/

	jquery_source = "//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min";	

}

/* ------------------- */
/*    Configuration    */
/* ------------------- */

var require = {
	baseUrl: "/js",
	paths: {

		/**
		*	External libraries.
		*/

		jquery: jquery_source,
		transit: '//cdnjs.cloudflare.com/ajax/libs/jquery.transit/0.9.9/jquery.transit.min',

		/**
		*	Module aliases.
		*/

		init: 'initialize'
		
	},
	shim: {
		'transit': {	
			deps: ['jquery']
		}
	}
};
