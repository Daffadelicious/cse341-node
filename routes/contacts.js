const routes = require('express').Router();
const contController = require('../controllers/contacts');

routes.get('/', contController.getAll);
routes.get('/:id', contController.getSingle);
routes.post('/', contController.addContact);
routes.put('/:id', contController.updateContact);
routes.delete('/:id', contController.delContact);

module.exports = routes;