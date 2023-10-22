const router = require('express').Router();
const controller = require('../controllers')


// Two routes, one default the other at /therestwo
// router.get('/therestwo', controller.anothaOne)
// router.get('/', controller.routeTest)
router.use('/contacts', require('./contactRoute'))
router.use('/', require('./swaggerRoute.js'));


module.exports = router;