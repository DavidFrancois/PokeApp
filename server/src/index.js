'use strict';

const App = require('./app');
const http = require('http').Server(App);

const port = 8080;

http.listen(port, () => console.log('Server listening on port: ' + port));

