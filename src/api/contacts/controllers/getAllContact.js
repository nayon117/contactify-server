const Contact = require("../../../models/Contacts");

const getAllContact = async (req, res) => {
    try {
        const result = await Contact.find();
        res.status(200).send(result);
    } catch (error) {
        res.status(500).send(error);
        console.log(error)
    }
}
module.exports = getAllContact;