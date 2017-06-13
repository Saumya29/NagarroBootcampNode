/**
 * Created by championswimmer on 13/06/17.
 */
const route = require('express').Router();
const data = require('../data');

route.get('/', (req, res) => {

    data.getTodos().then((results) => {
        res.send(results)
    })

});

route.post('/new', (req, res) => {

    data.addTodo(req.body.newtodo).then(()=> {
        res.redirect('/api/todos')
    }).catch((err) => {
        res.send(err)
    })
});

module.exports = route;