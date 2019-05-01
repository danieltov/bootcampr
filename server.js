// The Dependencies
// =============================================================
var express = require('express');
var path = require('path');

// The Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// The Parser
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// The Data
// =============================================================
var all = require('./app/data/camprs.js');

// The Middleware
// =============================================================
app.use(express.static('./app/public'));

// The Routes
// =============================================================
require('./app/routes/apiRoutes.js')(app, all);
require('./app/routes/htmlRoutes.js')(app, path);

// The Listener
// =============================================================
app.listen(PORT, function() {
    console.log('App listening on http://localhost:' + PORT);
});
