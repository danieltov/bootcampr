// Dependencies
// =============================================================
var express = require('express');
var path = require('path');
var camprs = require('./app/data/camprs.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Bring in Routes
// =============================================================
require('./app/routes/apiRoutes.js')(app);
require('./app/routes/htmlRoutes.js')(app);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log('App listening on http://localhost:' + PORT);
});
