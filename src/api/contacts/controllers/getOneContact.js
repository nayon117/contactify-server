const Contact = require("../../../models/Contacts");

const getOneContact = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await Contact.findById(id);
    res.status(200).send(result);  
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

module.exports = getOneContact;
