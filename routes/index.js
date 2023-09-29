const router = require('express').Router();
// Connect controller file
const controller = require('../controllers')

// Two routes, one default the other at /therestwo
router.get('/', controller.routeTest)
router.get('/therestwo', controller.anothaOne)
router.use('/contacts', require('./contactRoute'))

module.exports = router;