module.exports = function(app) {
    var mongoose = require('mongoose');
    var Schema = mongoose.Schema;

    var PatientSchema = Schema({
        name:{
            type: String,
            required: true
        },
        email: {
            type: String,
        },
        description: String,
        address:{
            street: String,
            number: Number,
            zipcode: String,
            neighborhood: String,
            complement: String,
            city: String,
            country: String
        },
        phones:[{number: {type: String, required: true}, description: String}],
    });

    var Patient = mongoose.model('Patient', PatientSchema);
    return Patient;
};