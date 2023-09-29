const router = require('express').Router();

const contacts = require('../controllers/contactController');

router.get('/', contacts.listAllContacts);
router.get('/:contactId', contacts.contactById);

module.exports = router;