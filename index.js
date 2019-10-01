const express = require('express');  //importing express from express;
const hubsModel = require('./data/hubs-model.js');

const server = express();

//teach express how to read json from body this is middleware
server.use(express.json());

//request handlers, takes the req that comes in and check for two things: the URL and the http method
server.get('/', (req, res) => {
    //order matters. the first arguement is the request the second arguement is the response
    res.send('hello asshole');
});

server.get('/hubs', (req, res) => {
    //get a list of hubs from database and send the list of hubs back to client (using method from hubs-model.js)
    hubsModel.find()
    .then(hubs => {
        res.send(hubs);
    }).catch(error => {
        res.send(error);
    });
});

server.post('/hubs', (req, res) => {
    //get the hub data from the request 
    const hubData = req.body;
    //add hub to database
    hubsModel.add(hubData)
    .then(hub => {
        res.json(hub);
    })
    .catch(error => {
        res.json({ message: 'error saving the hub' });
    });
});


const port = 8000;
server.listen(port, () => console.log(`\n** API on port ${port} **\n`));

