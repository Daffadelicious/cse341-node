const mongoose = require('mongoose');
const Contact = require('../modules/contact');

const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  console.log(contact)
  try {
    // const newContactData = await newContact.save()
    const newContact = await Contact.create(contact);
    res.status(201).json(newContact._id);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const listAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const contactById = async (req, res) => {
  res.send(res.contact);
};

const updateContact = async (req, res) => {
  const contactId = res.contact._id;
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday,
  };
  console.log(contact)
  try {
    await Contact.updateOne({_id:contactId}, contact)
    res.status(204).json({ message: contact });
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
};

const deleteContact = async (req, res) => {
  const contactId = res.contact._id;
  try {
    await Contact.deleteOne({ _id: contactId });
    res.status(200).json({ message: 'Contact has been removed' });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
};

const getContact = async (req, res, next) => {
  let contact;
  try {
    contact = await Contact.findById(req.params.contactId);
    if (contact == null) {
      return res
        .status(404)
        .json({ message: 'Cannot find contact with that id' });
    }
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
  res.contact = contact;
  next();
};

module.exports = {
  listAllContacts,
  getContact,
  contactById,
  createContact,
  updateContact,
  deleteContact,
};
