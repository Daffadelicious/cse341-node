const mongoose = require('mongoose'), contact = mongoose.model('contact');

const listAllContacts = async (req, res) => {
  contact.find({}, function (err, contactData) {
    if (err) res.send(err);
    res.json(contactData);
  });
  // const result = await contact.find();
  // res.send({"contacts": result})
};

const contactById = (req, res) => {
  contact.findById(req.params.contactId, function (err, contactData) {
    if (err) res.send(err);
    res.json(contactData);
  });
};

module.exports = { listAllContacts, contactById };
