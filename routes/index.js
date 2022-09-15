const routes = require('express').Router();
const lovedOne = require('../controllers/');

routes.get('/', lovedOne.husband);

module.exports = routes;