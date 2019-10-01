const express = require('express');  //importing express from express;
const hubsModel = require('./data/hubs-model.js');

const server = express();

//request handlers, takes the req that comes in and check for two things: the URL and the http method 

server.get('/', (req, res) => {
    //order matters. the first arguement is the request the second arguement is the response
    res.send('hello asshole');
});

server.get('/hubs', (req, res) => {
    //get a list of hubs from database and send the list of hubs back to client (using method from hubs-model.js)
    hubsModel.find().then(hubs => {
        res.send(hubs);
    }).catch(error => {
        res.send(error);
    });
});


const port = 8000;
server.listen(port, () => console.log(`\n** API on port ${port} **\n`));

