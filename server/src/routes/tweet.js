var express = require('express');
var router = express.Router();
var controllers = require('./../controllers');

router.get('/:pokemon', controllers.tweets.get);

module.exports = { path: '/tweets', router: router };