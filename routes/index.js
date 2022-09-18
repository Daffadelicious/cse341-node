const routes = require('express').Router();
const lovedOne = require('../controllers');

routes.get('/', lovedOne.husband);
routes.use('/contacts', require('./contacts'))

module.exports = routes;