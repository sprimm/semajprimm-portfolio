const Contact = require('../models/Contact.js')

const create = async (req, res) => {
    const contact = new Contact(req.body)
    try {
        await contact.save()
        return res.status(200).json({
            message: "Successfully signed up!"
        })
    } catch (error) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(error)
        })
    }
}

const list = async (req, res) => {
    try {
        let contacts = await Contact.find().select()
        res.json(contacts)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const contactByID = async (req, res) => {
    try {
        let contact = await Contact.findById(req.params.contactId)
        if(!contact){
            return res.status(400).json({error: "Contact not found"})
        }
        res.json(contact)
    } catch (error) {
        return res.status(400).json({error: "Could not retrieve contact"})
    }
}

const update = async (req, res) => {
    try {
        let contactId = req.params.contactId
        let newContact = req.body
        newContact.updated = Date.now()
        let contact = await Contact.findByIdAndUpdate(contactId, newContact, {new: true})
        if(!contact){
            return res.status(400).json({error: "Contact couldn't be updated"})
        }
        res.json(contact)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const removeById = async (req, res) => {
    try {
        let contactId = req.params.contactId
        let deletedContact = await Contact.findByIdAndDelete(contactId);
        if(!deletedContact){
            return res.status(400).json({error: "Contact couldn't be deleted"})
        }
        res.json(deletedContact)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

const remove = async (req, res) => {
    try {
        let deletedContacts = await Contact.deleteMany()
        if(!deletedContacts){
            return res.status(400).json({error: "Contacts couldn't be deleted"})
        }
        res.json(deletedContacts)
    } catch (err) {
        return res.status(400).json({
            error: errorHandler.getErrorMessage(err)
        })
    }
}

module.exports = { create, contactByID, list, removeById, remove, update }