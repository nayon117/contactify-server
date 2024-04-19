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
  phone: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  picture: {
    type: String,
    required: true
  }
},{versionKey: false});

// model for using the schema
const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
