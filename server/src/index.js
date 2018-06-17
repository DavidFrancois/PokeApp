'use strict';

const App = require('./app');
const http = require('http').Server(App);

// const io = require('./io');
const port = 8080;

// io.attach(http);
http.listen(port, () => console.log('Server listening on port: ' + port));

