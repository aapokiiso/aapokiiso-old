/* ---------------- */
/*    ~ ROUTES ~    */
/* ---------------- */

module.exports = function(app){
	
	/**
	*	GET /
	*
	*	Landing page (hub or landing)
	*/
	
	app.get(
		'/', 
		function(req, res){
			res.render('landing', { title: "Aapo Kiiso" });
		}
	);
	
}
