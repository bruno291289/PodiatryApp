module.exports = function(app, passport) {
    var LocalStrategy = require('passport-local').Strategy;
    var mongoose = require('mongoose');
    var User = app.models.user;

/*    app.post('/login', passport.authenticate('local'), function(req, res) {
        console.log('USER AUTHENTICATED');
        res.redirect('/home');
    });*/

    app.post('/login', passport.authenticate('local', {successRedirect: '/home', failureRedirect: '/login'}));

    app.get('/logout', function(req, res) {
        req.session.destroy();
        req.logout();
        res.redirect('/');
    });

    passport.serializeUser(function(user, done) {
        console.log('serializeUser ' + user);
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        console.log('desserializeUser ' + id);
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password'
        },
        function(username, password, done) {
            console.log('validating the user ' + username + ' - ' + password);

            User.findOne({
                email: username
            }, function(err, user) {
                if (err) {
                    return done(err);
                }

                console.log('user found ' + user);

                if (!user) {
                    return done(null, false, {
                        message: 'Incorrect username.'
                    });
                }

                console.log('validating password ' + user.validPassword(password));

                if (!user.validPassword(password)) {
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }
                return done(null, user);
            });
        }
    ));
}