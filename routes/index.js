const routes = require('express').Router();
// Connect controller file
const controller = require('../controllers')

// Two routes, one default the other at /therestwo
routes.get('/', controller.routeTest)
routes.get('/therestwo', controller.anothaOne)

module.exports = routes;