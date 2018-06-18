const T = require('../twit');

module.exports.get = (req, res) => {
  T.get('search/tweets', { q: req.params.pokemon, count: 10 }, (err, data, response) => {
    if (err) res.status(err.statusCode).send(err.message);
    res.status(200).send(data);
  });
}