module.exports = function(app) {
    var User = app.models.user;

    var UserController = {

        listAll: function(req, res) {
            User.find(function(err, docs) {
                res.json(docs);
            });
        },

        save: function(req, res) {
            console.log('saving a new user ' + req.body);
            var user = new User(req.body);
            user.setPassword(req.body.password);
            user.save(function(err, p) {
                if (!err) {
                    console.log('user saved ' + p);
                    res.json(p);
                } else{
                    console.log('an error ocurred while trying to save the user ' + err);
                }
            });
        },

        delete: function(req, res) {
            User.remove({
                _id: req.params.id
            }, function(err, doc) {
                res.json(doc);
            });
        },

        view: function(req, res) {
            User.findOne({
                _id: req.params.id
            }, function(err, doc) {
                res.json(doc);
            });
        },

        update: function(req, res){
            db.users.findOneAndUpdate({_id: req.body._id}, req.body, function(err, doc){
                req.json(doc);
            });
        }

    };

    return UserController;
}