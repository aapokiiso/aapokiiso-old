/* --------------------- */
/*    ~ AAPO.KII.SO ~    */
/* --------------------- */

/* ------------------ */
/*    Dependencies    */
/* ------------------ */

var express = require('express');
var http = require('http');
var path = require('path');

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

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.logger('dev'));

app.use(express.compress());
app.use(express.methodOverride());

app.use(express.json());
app.use(express.urlencoded());

app.use(express.cookieParser());

/* ------------------------- */
/*    Route configuration    */
/* ------------------------- */

app.use(app.router);
require('./routes')(app);

/* -------------------- */
/*    Error handling    */
/* -------------------- */

app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));

/* ------------------ */
/*    Start server    */
/* ------------------ */

var server = http.createServer(app).listen(app.get('port'), function(){
	console.log('http://aapo.kii.so now up and running!');
});
