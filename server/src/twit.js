const Twit = require('twit');

const T = new Twit({
  consumer_key:         '3v4tM1tGMxTJKRtk269A9BJON',
  consumer_secret:      'htXujWUOScIdMmweWkcopMaFFUYYEQyI5DJ5UtUqTCokgKXBR8',
  access_token:         '766573207642054656-yk0UrLTVqEbylYt9wAJAqCRWgM1B0dk',
  access_token_secret:  'IvNMnmssLbA5UjRK40sg4ED0tUEBXIFt74kukCbO2wUvH',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true     // optional - requires SSL certificates to be valid.
})

module.exports = T;