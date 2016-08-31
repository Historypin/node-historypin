# node historypin
a set of helper methods that make calls to the historypin api.

[![Build Status](https://travis-ci.org/Historypin/node-historypin.svg?branch=master)](https://travis-ci.org/Historypin/node-historypin) [![Coverage Status](https://coveralls.io/repos/github/Historypin/node-historypin/badge.svg?branch=master)](https://coveralls.io/github/Historypin/node-historypin?branch=master)

## callApi( req, user_options, callback )
provides a callback method for calling the api; the callback will be called with the result of the api call once it completes
```javascript
@param {IncomingMessage} req

@param {Object} user_options
@param {string} user_options.api_endpoint
@param {string} user_options.project
@param {boolean} [user_options.debug]
@param {string} [user_options.method]
@param {Object} [user_options.qs]

@param {Function} callback
```

## getApiPromise( req, user_options )
provides a promise method for calling the api; the promise will be returned allowing the calling application to handle the promise.
```javascript
@param {IncomingMessage} req

@param {Object} user_options
@param {string} user_options.api_endpoint
@param {string} user_options.project
@param {boolean} [user_options.debug]
@param {string} [user_options.method]
@param {Object} [user_options.qs]

@returns {Promise}
```
