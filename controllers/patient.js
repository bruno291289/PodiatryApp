module.exports = function(app) {
	var Patient = app.models.patient;

	var PatientController = {
		listAll: function(req, res){
			Patient.find(
                function(err, docs){
                    res.json(docs);
                }
            );
		},

		save:function(req, res){
            console.log('SAVING ' + req.body);
			var patient = new Patient(req.body);
			patient.save(function(err, p) {
                if (!err) {
                    console.log('user saved ' + p);
                    res.json(p);
                } else{
                    console.log('an error ocurred while trying to save the patient ' + err);
                }
            });
		},

		delete: function(req, res) {
            Patient.remove({
                _id: req.params.id
            }, function(err, doc) {
                res.json(doc);
            });
        },

        view: function(req, res) {
            Patient.findOne({
                _id: req.params.id
            }, function(err, doc) {
                res.json(doc);
            });
        }
	}

    return PatientController;
}