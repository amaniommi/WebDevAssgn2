let mongoose = require('mongoose');

// create a model class
let contactModel = mongoose.Schema({
    Name: String,
    Email: String,
    Contact: String,
 },
{
    collection: "Contact"
});

module.exports = mongoose.model('Contact', contactModel);