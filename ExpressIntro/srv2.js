/**
 * Created by championswimmer on 09/06/17.
 */
const express = require('express');

const app = express();

let todos = [];


app.use('/students', require('./routes/students'));
app.use('/teachers', require('./routes/teachers'));

app.listen(3333, function () {
    console.log('Running on http://localhost:3333/');
});