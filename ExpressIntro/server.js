/**
 * Created by championswimmer on 09/06/17.
 */
const express = require('express');

const app = express();
function m1(req, res, next) {
    console.log('m1');
    req.query.q = parseInt(req.query.q);
    next();
}
function m2(req, res, next) {
    console.log('m2');
    next();
}
function m3(req, res, next) {
    console.log('m3');

    res.send('WHat are you looking for ? ')

}


app.use(m1);
app.use(m2);

app.get('/', function (req, res, next) {
    console.log('Sending response');
    console.log(req.query.q);
    res.body = 'asdasd'
    res.status(200).send('Hello World !')
});

app.use(m3);

app.listen(2222, function () {
    console.log('Our server is running on http://localhost:2222')
});