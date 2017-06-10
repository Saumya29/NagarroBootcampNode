/**
 * Created by championswimmer on 09/06/17.
 */

const router = require('express').Router;

const route = router();

let teachers = [
    {name: 'Raghav', subject: 'Physics'},
    {name: 'Leena', subject: 'Chemistry'},
    {name: 'Neha', subject: 'Maths'},

];

route.get('/', (req, res) => {
    res.send(teachers);
});

route.get('/:id', (req, res) => {
    res.send(teachers[parseInt(req.params.id)])
});

module.exports = route;