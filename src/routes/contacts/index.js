var express = require("express");
const { createContact, getAllContact } = require("../../api/contacts/controllers");
var router = express.Router()

router.post('/contacts', createContact)
router.get('/contacts', getAllContact)

module.exports = router;