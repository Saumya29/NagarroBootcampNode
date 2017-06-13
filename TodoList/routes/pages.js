/**
 * Created by championswimmer on 13/06/17.
 */
const route = require('express').Router();
const fs = require('fs');
const data = require('../data');

route.get('/', (req, res) => {

    data.getTodos().then((results) => {
        res.render("todos", {todos: results})
    })

});

route.post('/add', (req, res) => {

    data.addTodo(req.body.newtodo).then(()=> {
        res.redirect('/todos')
    }).catch((err) => {
        res.send(err)
    })
});

module.exports =  route;