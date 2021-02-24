let mongoose = require('mongoose');

// create a model class
let contactListModel = mongoose.Schema({
    contact_name: String,
    contact_number: String,
    email: String,

},
{
    collection: "business_contact_list"
});

module.exports = mongoose.model('ContactListModel', contactListModel);