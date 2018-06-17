const T = require('../twit');

module.exports.get = (req, res) => {
  console.log(req.params);
  T.get('search/tweets', { q: req.params.pokemon, count: 10 }, (err, data, response) => {
    console.log(data);
    res.status(200).send(data);
  });
}