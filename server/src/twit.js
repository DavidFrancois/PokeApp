const Twit = require('twit');

// Put credentials in order to use
const T = new Twit({
  consumer_key:         '',
  consumer_secret:      '',
  access_token:         '-yk0UrLTVqEbylYt9wAJAqCRWgM1B0dk',
  access_token_secret:  '',
  timeout_ms:           60*1000,  // optional HTTP request timeout to apply to all requests.
  strictSSL:            true     // optional - requires SSL certificates to be valid.
})

module.exports = T;
