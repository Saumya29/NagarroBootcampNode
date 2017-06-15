/**
 * Created by championswimmer on 15/06/17.
 */
const route = require('express').Router();

route.use('/events', require('./events'));


module.exports = route;