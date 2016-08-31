# node historypin
a set of helper methods that make calls to the historypin api.

[![Build Status](https://travis-ci.org/Historypin/node-historypin.svg?branch=master)](https://travis-ci.org/Historypin/node-historypin) [![Coverage Status](https://coveralls.io/repos/github/Historypin/node-historypin/badge.svg?branch=master)](https://coveralls.io/github/Historypin/node-historypin?branch=master)

## callApi( req, user_options, callback )
```javascript
@param {IncomingMessage} req
@param {Object} user_options
@param {Function} callback
```

## getApiPromise( req, user_options )
```javascript
@param {IncomingMessage} req
@param {Object} user_options
@returns {Promise}
```