/**
 * Created by championswimmer on 13/06/17.
 */

const route = require('express').Router();
const data = require('../data');

route.get('/', (req, res) => {
    data.getTodos(function (err, data) {

        if (err) { res.send(err) }
        res.send(data)


    })
});

route.post('/new', (req, res) => {
    data.addTodo(req.body.newtodo, function (err) {
        if (err) { res.send(err) }
        res.redirect('/api/todos')

    })
});

module.exports = route;