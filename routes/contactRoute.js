module.exports = function(app) {
  let contacts = require('../controllers/contactController');

  app.route('/contacts')
    .get(contacts.listAllContacts)


  app.route('/contacts/:contactId')
    .get(contacts.contactById)
};