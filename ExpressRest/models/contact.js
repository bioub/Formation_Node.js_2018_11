
const mongoose = require('mongoose');


const contactSchema = new mongoose.Schema({
  societe_id: mongoose.SchemaTypes.ObjectId,
  name: {
    type: String,
    required: true
  }
});

/*
contactSchema.pre('save', () => {

})
*/

const Contact = mongoose.model('Contact', contactSchema);


module.exports = Contact;
