/**
 * Created by championswimmer on 13/06/17.
 */
const fs = require('fs');
const TODO_FILE = require('./config').TODO_FILE;



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

function getTodos (done) {
    fs.readFile(TODO_FILE, (err, data) => {
        if (err) {
            done(err)
        }

        done(null, JSON.parse(data.toString()))
    })
}

function addTodo (todo, done) {
    todos.push(todo);
    fs.writeFile(TODO_FILE, JSON.stringify(todos), (err) => {
        if (err) {
            done(err)
        }
        done(null)
    })
}

module.exports = {
    todos,
    getTodos,
    addTodo
};