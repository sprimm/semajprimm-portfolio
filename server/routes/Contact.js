const express = require('express')
const contactController = require('../controllers/Contact.js')
const router = express.Router()

// add a new contact
router.post('/api/contacts', contactController.create)

// get all contacts
router.get('/api/contacts', contactController.list)

// get contacts by id
router.get('/api/contacts/:contactId', contactController.contactByID)

// update contact by id
router.put('/api/contacts/:contactId', contactController.update)

// remove contact by id
router.delete('/api/contacts/:contactId', contactController.removeById)

// remove all contacts
router.delete('/api/contacts/', contactController.remove)

module.exports = router;