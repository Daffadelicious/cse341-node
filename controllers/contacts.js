const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

/* HTTP Status codes: 
200 - OK
201 - Created
202 - Accepted
204 - No Content
500 - Internal Server Error
*/
const getAll = async (req, res, next) => {
  const result = await mongodb.getDb().db().collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingle = async (req, res, next) => {
  const userId = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection('contacts').find({ _id: userId });
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

const addContact = async (req,res,next) =>{
  // Get the json containing client
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday

  };
  // .insertOne - adds one document to collection
  const result = await mongodb.getDb().db().collection("contacts").insertOne(contact);
  // Response
  if (result){
    res.status(201).json(result);
  }else{
    res.status(500).json(response.error || 'The contact was unable to be added');
  }
}

const updateContact = async (req,res,next) =>{
  // Get the user id
  const id = new ObjectId(req.params.id);
  // Get the json of updated info
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favoriteColor: req.body.favoriteColor,
    birthday: req.body.birthday

  };
  // .replaceOne(toBeReplaced,replacedWith) - Replaces first parameter with second parameter
  const result = await mongodb.getDb().db().collection("contacts").replaceOne({ _id: id },contact);
  // Response
  if (result){
    res.status(204).send();
  }else{
    res.status(500).json(response.error || 'The contact was unable to be updated');
  }
  
}

const delContact = async (req,res,next) =>{
  // Get the user id
  const id = new ObjectId(req.params.id);
  const result = await mongodb.getDb().db().collection("contacts").deleteOne({ _id: id});
  if (result){
    res.status(200).send();
  }else{
    res.status(500).json(response.error || 'The contact was unable to be deleted');
  }
}

module.exports = {getAll, getSingle, addContact, updateContact, delContact};