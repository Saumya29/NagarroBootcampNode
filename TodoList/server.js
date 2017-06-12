/**
 * Created by championswimmer on 12/06/17.
 */
const express = require('express');
const bp = require('body-parser');
const fs = require('fs');
const app = express();

const TODO_FILE = __dirname + '/todos.txt';

app.set("view engine", "hbs");

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));

var todos = [];
fs.readFile(TODO_FILE, (err, data) => {
    if (err) {
        console.log(err);
        fs.writeFile(TODO_FILE, JSON.stringify(todos), (err) => {
            if (err) console.log(err);
        })
    }
    try {
        todos = JSON.parse(data.toString());
    } catch (err) {
        console.log(err);

        fs.writeFile(TODO_FILE, JSON.stringify(todos), (err) => {
            if (err) console.log(err);
        })
    }

});

app.use('/static', express.static(__dirname + "/public_static"));

app.post('/addtodo', (req, res) => {
    todos.push(req.body.newtodo);
    fs.writeFile(TODO_FILE, JSON.stringify(todos), (err) => {
        if (err) {
            res.send (err)
        }

        fs.readFile(TODO_FILE, (err, data) => {
            if (err) {
                res.send(err)
            }

            res.send(JSON.parse(data.toString()))
        })
    })
});

app.get('/gettodos', (req, res) => {
    fs.readFile(TODO_FILE, (err, data) => {
        if (err) {
            res.send(err)
        }

        res.send(JSON.parse(data.toString()))
    })
});

app.get('/todos', (req, res) => {
    fs.readFile(TODO_FILE, (err, data) => {
        if (err) {
            res.send(err)
        }
        let todosToSend = []

        for (todo of JSON.parse(data.toString())) {
            todosToSend.push({task: todo})
        }
        console.log(todosToSend);

        res.render("todos", {todos: todosToSend})
    })
});

app.post('/add', (req, res) => {
    todos.push(req.body.newtodo);
    fs.writeFile(TODO_FILE, JSON.stringify(todos), (err) => {
        if (err) {
            res.send (err)
        }

        res.redirect('/todos')
    })
});



app.listen(2345, function () {
    console.log("Server started on http://localhost:2345");
});