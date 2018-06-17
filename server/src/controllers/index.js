const controllers = {};

['tweets'].forEach(f => controllers[f] = require('./' + f));

module.exports = controllers;
