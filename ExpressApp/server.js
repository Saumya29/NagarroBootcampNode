const express = require('express');

const app = express();

let todos = [];

app.use('/', express.static(__dirname + "/public_static/"));

app.get('/addtodo', (req, res) => {
    var newtodo = req.query.todo;
    todos.push(newtodo);
    res.send(todos);
});


app.listen(3434, function () {
    console.log("Server started on http://localhost:3434");
});