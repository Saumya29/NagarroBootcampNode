/**
 * Created by championswimmer on 12/06/17.
 */
const express = require('express');
const bp = require('body-parser');
const fs = require('fs');
const app = express();

app.set("view engine", "hbs");

app.use(bp.json());
app.use(bp.urlencoded({extended: true}));



app.use('/static', express.static(__dirname + "/public_static"));

const todoApiRoute = require('./routes/api');
const pageRoute = require('./routes/pages');
app.use('/api/todos', todoApiRoute);
app.use('/todos', pageRoute);


app.listen(2345, function () {
    console.log("Server started on http://localhost:2345");
});