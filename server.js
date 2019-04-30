// Dependencies
// =============================================================
var express = require('express');
var path = require('path');
var all = require('./app/data/camprs.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Routes
// =============================================================
require('./app/routes/apiRoutes.js')(app, all);
require('./app/routes/htmlRoutes.js')(app, path);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log('App listening on http://localhost:' + PORT);
});
