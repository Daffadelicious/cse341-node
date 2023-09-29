const mongoose = require('mongoose')
const Contact = require("../modules/contact");

const createContact = async () => {
  try {
    await Contact.create({ 
      firstName: "Tawnee", 
      lastName: "Marsh", 
      email: "tawneethedog@gmail.com", 
      favoriteColor: "gray/periwinkle", 
      birthday: "07/30/2011"})
    console.log("Contact saved")
  } catch (e) {
    console.log(e.message)
  }
}

const updateContact = () => {

}

const listAllContacts = (req, res) => {
  Contact.find({}).then(function(contactData) {
    res.json(contactData);
  }).catch(function(err) {
    console.log(err);
  });
};

const contactById = async (req, res) => {
  const contactData = await Contact.findById(req.params.contactId)
  if (contactData){
    res.json(contactData);
  }
};

module.exports = { listAllContacts, contactById };
