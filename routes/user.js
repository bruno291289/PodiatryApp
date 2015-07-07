module.exports = function(app) {
    var controller = app.controllers.user;

    app.get('/login', function(req, res) {
        res.render('login');
    });

    app.get('/registeruser', function(req, res) {
        res.render('register');
    });

    app.post('/registeruser', controller.save);

}