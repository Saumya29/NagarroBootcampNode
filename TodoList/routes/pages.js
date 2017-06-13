/**
 * Created by championswimmer on 13/06/17.
 */
const route = require('express').Router();
const fs = require('fs');
const data = require('../data');

route.get('/', (req, res) => {
    data.getTodos(function (err, data) {

        if (err) { res.send(err) }
        res.render("todos", {todos: data})


    })

});

route.post('/add', (req, res) => {
    data.addTodo(req.body.newtodo, function (err) {
        if (err) { res.send(err) }
        res.redirect('/todos')

    })
});

module.exports =  route;