const Contact = require("../../../models/Contacts");

const deleteContact = async (req, res) => {
  const contactId = req.params.id;
  try {
    const result = await Contact.deleteOne({ _id: contactId });
    res.send(result);
  } catch (error) {
    console.error("Error deleting contact:", error);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = deleteContact;
