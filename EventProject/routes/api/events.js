/**
 * Created by championswimmer on 15/06/17.
 */
const route = require('express').Router();
const Event = require('../../db/models').Event;

route.get('/', (req, res) => {
    Event.findAll()
        .then((events) => {
            res.status(200).send(events)
        })
        .catch((err) => {
            console.log(err)
            res.status(500).send("Error retrieving events")
        })
});


route.get('/:id', (req, res) => {
    Event.findByPrimary(req.params.id)
        .then((event) => {
            if (!event) {
                return res.status(500).send("No such event found")
            }
            res.status(200).send(event);
        })
        .catch((err) => {
            res.status(500).send('Error finding event')
        })
});

route.post('/new', (req, res) => {
    //Add server-side validations if required here
    if (!req.body.title) {
        return res.status(403).send('Event cannot created without title')
    }
    // YYYY-MM-DD'T'HH:MM
    Event.create({
        title: req.body.title,
        venue: req.body.venue,
        imgUrl: req.body.imgUrl,
        startTime: new Date(req.body.startTime),
        endTime: new Date(req.body.endTime),
        message: req.body.message,
    }).then((event) => {
        res.status(200).send(event)
    }).catch((err) => {
        res.status(500).send("There was an error creating event")
    })
});

module.exports = route;