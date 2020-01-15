// require the express library that we marked as a dependency
const express = require('express');

// use express library to create a new app
const app = express();

// setup a single route handler
app.get('/', (req, res) => {
    res.send('Hello-World');
});

// setup application to listen on a port
app.listen(8080, () => {
    console.log('Listening on port 8080');
});