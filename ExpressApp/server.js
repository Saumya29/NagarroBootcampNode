const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let todos = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', express.static(__dirname + "/public_static/"));

app.get('/addtodo', (req, res) => {
    var newtodo = req.query.todo;
    todos.push(newtodo);
    res.send(todos);
});

app.post('/addtodo', (req, res) => {
    var newtodo = req.body.todo;
    todos.push(newtodo);
    res.send(todos);
});


app.listen(3434, function () {
    console.log("Server started on http://localhost:3434");
});