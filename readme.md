# node-historypin
[![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][david-dm-image]][david-dm-url]

historypin api helper methods

## table of contents
* [installation](#installation)
* [usage](#usage)
    * [callApi( req, user_options, callback )](#callapi-req-user_options-callback-)
    * [getApiPromise( req, user_options )](#getapipromise-req-user_options-)
* [license](#license)

## installation
```javascript
npm install node-historypin
```

## usage
### callApi( req, user_options, callback )
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

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/Historypin/node-historypin/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/Historypin/node-historypin?branch=master
[david-dm-image]: https://david-dm.org/Historypin/node-historypin.svg
[david-dm-url]: https://david-dm.org/Historypin/node-historypin
[mit-license]: https://raw.githubusercontent.com/Historypin/node-historypin/master/license.txt
[travis-image]: https://travis-ci.org/Historypin/node-historypin.svg?branch=master
[travis-url]: https://travis-ci.org/Historypin/node-historypin
