define(function(require){

	var calculate = {
		menu: require('utilities/calculate/menu'),
		overlays: require('utilities/calculate/overlays')
	};

	/**
	*	function doc()
	*	This function is the global document resizeultation function, 
	*	which resizes all the basic document components.
	*
	*	Name is doc to avoid conflicts with js's document object.
	*/

	function doc(){
		calculate.menu();
		calculate.overlays();
	}

	return doc;

});
