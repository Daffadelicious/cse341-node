const router = require('express').Router();

const contacts = require('../controllers/contactController');

// Get all contacts
router.get('/', contacts.listAllContacts);

// Get a single contact
router.get('/:contactId', contacts.getContact, contacts.contactById);

// Create a contact
router.post('/', contacts.createContact)

// Update a contact
router.put('/:contactId', contacts.getContact, contacts.updateContact)

// Delete a contact
router.delete('/:contactId', contacts.getContact, contacts.deleteContact)

module.exports = router;