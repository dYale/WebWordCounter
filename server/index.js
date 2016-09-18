var express = require('express');
var app = express();
var routes = express.Router();

// Parse incoming request bodies as JSON
app.use( require('body-parser').json() );

app.use('/', routes);
routes.use('/API/general', require('./API/general.js'));

// Non-js static files
app.use(express.static('client/'));

app.listen(4000);
console.log("Listening on port", 4000);
