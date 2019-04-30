// Dependencies
// =============================================================
var express = require('express');
var path = require('path');
var all = require('./app/data/campers.js');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'app/public/home.html'));
});

// Displays survey page
app.get('/survey', function(req, res) {
    res.sendFile(path.join(__dirname, 'app/public/survey.html'));
});

// Displays all Camprs
app.get('/api/characters', function(req, res) {
    return res.json(all.camprs);
});

// Add New Campr
// =============================================================
app.post('/api/camprs', function(req, res) {
    let newCampr = req.body;
    all.camprs.push(newCampr);
    res.json(newCampr);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
});
