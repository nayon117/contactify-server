const mongoose = require('mongoose');

// schema for the contact information
const contactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  profilePicture: {
    type: String,
  }
});

// model for using the schema
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
