const Contact = require("../../../models/Contacts")

const createContact = async(req,res) =>{
    const contacts = new Contact(req.body)

    try {
        const result = await contacts.save()
        res.status(201).send(result)
    } catch (error) {
        res.status(500).send(error);
        console.log(error)
    }
}

module.exports = createContact;