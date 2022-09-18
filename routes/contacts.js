const routes = require('express').Router();
const contController = require('../controllers/contacts');

routes.get('/', contController.getAll);

routes.get('/:id', contController.getSingle);



module.exports = routes;