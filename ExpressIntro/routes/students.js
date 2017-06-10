/**
 * Created by championswimmer on 09/06/17.
 */

const router = require('express').Router;

const route = router();

let students = [
    {name: 'John', age: 10},
    {name: 'Tom', age: 11},
    {name: 'Shyam', age: 10},
    {name: 'Rahul', age: 14},
];

route.get('/', (req, res) => {
    res.send(students);
});

route.get('/:id', (req, res) => {
    res.send(students[parseInt(req.params.id)])
});

route.post('/add');

module.exports = route;