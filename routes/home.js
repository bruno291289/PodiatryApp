module.exports = function(app) {

    var authenticator = require('../util/authenticator');

    app.get('/home', authenticator, function(req, res) {
        res.render('home');
    });

}