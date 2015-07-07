module.exports = function(app) {
    var controller = app.controllers.patient;

    var authenticator = require('../util/authenticator');

    app.get('/patient', authenticator, function(req, res){res.render('patient')});
    app.get('/patients', authenticator, controller.listAll);
    app.post('/patient', authenticator, controller.save);

}