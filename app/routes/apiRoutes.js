module.exports = function(app, all) {
    // API Routes
    // =============================================================

    // Displays all Camprs
    app.get('/api/camprs', function(req, res) {
        return res.json(all.camprs);
    });

    // Add New Campr
    // =============================================================
    app.post('/api/camprs', function(req, res) {
        let newCampr = req.body;
        all.camprs.push(newCampr);
        res.json(newCampr);
    });
};
