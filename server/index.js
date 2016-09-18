
var express = require('express');
var app = express();

// Non-js static files
app.use(express.static('client/views/'));

app.listen(4000);
console.log("Listening on port", 4000);
