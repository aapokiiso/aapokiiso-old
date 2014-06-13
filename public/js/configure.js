/* --------------------------------- */
/*    ~ RequireJS configuration ~    */
/* --------------------------------- */

/**
*	Path descriptions:
*	
*	/app/ contains main application js.
*	/components/ contains js for different components.
*	/vendor/ contains external libraries.
*	/utilities/ contains utility function collections.
*/

/* ------------------- */
/*    JQuery source    */
/* ------------------- */

/**
*	Applies for non-IE (well actually >= IE9) browsers. 
*/

var jquery_source = "//ajax.googleapis.com/ajax/libs/jquery/2.1.0/jquery.min";

var bodyclass = document.documentElement.className;

if(bodyclass.indexOf('old_IE') >= 0){

	/**
	*	Applies for older IEs (IE8 and below), since jQuery 2.x supports IE only from IE9 upwards.
	*/

	jquery_source = "//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min";	

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
