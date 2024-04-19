var express = require("express");
const { createContact, getAllContact, getOneContact, updateContact } = require("../../api/contacts/controllers");
var router = express.Router()

router.post('/contacts', createContact)
router.get('/contacts', getAllContact)
router.get('/contacts/:id', getOneContact)
router.put('/contacts/:id', updateContact)
router.delete('/contacts/:id', deleteContact)

module.exports = router;