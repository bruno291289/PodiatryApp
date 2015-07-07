module.exports = function(req, res, next) {
    console.log('Authenticating route');

    if (req.isAuthenticated && req.isAuthenticated()) {
        console.log('AUTHENTICATED!');
        return next();
    }

    console.log('NOT AUTHENTICATED');
    res.redirect('/');
}