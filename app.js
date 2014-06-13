/* ----------------------------------- */
/*    ~ AAPO.KII.SO CONFIGURATION ~    */
/* ----------------------------------- */

/* ------------------ */
/*    Dependencies    */
/* ------------------ */

/**
*	General dependencies.
*/

var http = require('http');

/**
*	Express dependencies.
*/

var express = require('express');

var middleware = {
	compress: require('compression'),
	bodyParser: require('body-parser'),
	methodOverride: require('method-override'),
	static: require('serve-static'),
	favicon: require('static-favicon'),
	logger: require('morgan'),
	cookieParser: require('cookie-parser'),
	session: require('express-session'),
	errorHandler: require('errorhandler')
};

/* ------------------------ */
/*    Initialize express    */
/* ------------------------ */

var app = express();

/* --------------------------- */
/*    Express configuration    */
/* --------------------------- */

app.set('port', process.env.PORT || 3002);

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.use(middleware.compress());
app.use(middleware.bodyParser());
app.use(middleware.methodOverride());

app.use(middleware.static(__dirname + '/public', { maxAge: 30672000000 }));
app.use(middleware.favicon(__dirname + '/public/img/favicon.ico'));

if(! process.env.NODE_ENV || process.env.NODE_ENV == "development"){
	app.use(middleware.logger('dev'));
}

/* ------------------------- */
/*    Route configuration    */
/* ------------------------- */

/**
*	Require all page routes.
*/

require('./routes')(app);

/* -------------------- */
/*    Error handling    */
/* -------------------- */

/**
*	General Express error handling for system errors.
*/

app.use(middleware.errorHandler({ dumpExceptions: true, showStack: true }));

/* ------------------ */
/*    Start server    */
/* ------------------ */

var server = http.createServer(app).listen(app.get('port'), function(){
	console.log('http://aapo.kii.so now up and running on port ' + app.get('port') + '.');
});
