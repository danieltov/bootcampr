module.exports = function(app, path) {
    // HTML Routes
    // =============================================================

    // Displays homepage
    app.get('/', function(req, res) {
        res.sendFile(path.join(__dirname, '../../app/public/home.html'));
    });

    // displays survey page
    app.get('/survey', function(req, res) {
        res.sendFile(path.join(__dirname, '../../app/public/survey.html'));
    });

    // displays results
    app.get('/results', function(req, res) {
        res.send('???');
    });
};
