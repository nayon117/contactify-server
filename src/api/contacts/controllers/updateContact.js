const Contact = require("../../../models/Contacts");

const updateContact = async (req, res) => {
  const { id } = req.params;

  try {
    const existingContact = await Contact.findById(id);
    if (!existingContact) {
      return res.status(404).send({ message: "Contact not found" });
    }

    // Update each field individually
    existingContact.name = req.body.name || existingContact.name;
    existingContact.email = req.body.email || existingContact.email;
    existingContact.phoneNumber =
      req.body.phoneNumber || existingContact.phoneNumber;
    existingContact.address = req.body.address || existingContact.address;
    existingContact.profilePicture =
      req.body.profilePicture || existingContact.profilePicture;

    const updatedContact = await existingContact.save();

    res.status(200).send(updatedContact);
  } catch (error) {
    console.log(error);
    res.status(500).send({ message: "Error updating contact" });
  }
};

module.exports = updateContact;
