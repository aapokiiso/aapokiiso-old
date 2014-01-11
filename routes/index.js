/* ---------------- */
/*    ~ ROUTES ~    */
/* ---------------- */

/* ------------------ */
/*    Dependencies    */
/* ------------------ */

/* ------------ */
/*    Routes    */
/* ------------ */

module.exports = function(app){
	
	/**
	*	GET /
	*
	*	Landing page (hub or landing)
	*/
	
	app.get(
		'/', 
		function(req, res){
			res.render('index', { title: "Aapo Kiiso" });
		}
	);
	
}
