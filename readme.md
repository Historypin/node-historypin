# node-historypin
[![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependency Status][david-dm-image]][david-dm-url]

historypin api helper methods; provides two ways to call the historypin api: via a callback, or a promise.


## table of contents
* [installation](#installation)
* [usage](#usage)
    * [user options](#user-options)
        * [api endpoints](#api-endpoints)
        * [request headers](#request-headers)
    * [getApiCallback( user_options, request_headers, callback )](#getapicallback-user_options-request_headers-callback-)
        * [default callback](#default-callback)
    * [getApiPromise( user_options, request_headers )](#getapipromise-user_options-request_headers-)
        * [default promise](#default-promise)
* [license](#license)

## installation
```javascript
npm install node-historypin
```

## usage
### user options
```javascript
{
  api_endpoint: 'get-map',
  [data]: {},
  [debug]: true,
  project: 'sourdoughrye',
  [qs]: {}
}
```

#### api endpoints
the following endpoints are currently handled
```javascript
var endpoints = {
  'get-gallery': 'https://www.historypin.org/en/api/{project}/pin/get_gallery.json',
  'get-map': 'https://www.historypin.org/en/api/{project}/pin/get_map.json',
  'get-pin': 'https://www.historypin.org/en/api/{project}/pin/get.json',
  'get-project': 'https://www.historypin.org/en/api/{project}/projects/get.json',
  'listing': 'https://www.historypin.org/en/api/projects/listing.json'
};
```

#### data
data sent to the api in an http `POST`.

#### debug
whether or not to use the npm [request-debug][request-debug-url] module when making api requests.

#### qs
query string parameters sent to the api with an http `GET`.

### request headers
the following, common proxy / load balancer request headers are added to the api request if they are passed into the above module methods via the request_headers parameter.
```javascript
{
  'x-forwarded-for': request_headers[ 'x-forward-for' ],
  'x-forwarded-proto': request_headers[ 'x-forward-for' ],
  'x-real-agent': request_headers[ 'x-real-agent' ],
  'x-real-ip': request_headers[ 'x-real-ip' ]
}
```

### getApiCallback( user_options, request_headers, callback )
```javascript
@param {Object} user_options
@param {string} user_options.api_endpoint
@param {string} user_options.project

@param {boolean} [user_options.data = {}]
@param {boolean} [user_options.debug = false]
@param {string} [user_options.method = get]
@param {Object} [user_options.qs = {}]

@param {Object} [request_headers]
@param {Function} callback

@throws {Error}
```

#### default callback
```javascript
var getApiCallback = require( 'node-historypin' ).getApiCallback;

getApiCallback(
  { api_endpoint: 'get-map', project: 'sourdoughrye' },
  null,
  /**
   * @param {null|Error} err
   * @param {IncomingMessage} response
   * @param {string} body
   */
  function ( err, response, body ) {
    // handle results
  }
);
```

### getApiPromise( user_options, request_headers )
```javascript
@param {Object} user_options
@param {string} user_options.api_endpoint
@param {string} user_options.project

@param {boolean} [user_options.data = {}]
@param {boolean} [user_options.debug = false]
@param {string} [user_options.method = get]
@param {Object} [user_options.qs = {}]

@param {Object} [request_headers]

@throws {Error}
@returns {Promise}
```

#### default promise
```javascript
var getApiPromise = require( 'node-historypin' ).getApiPromise;

getApiPromise( { api_endpoint: 'get-map', project: 'sourdoughrye' } )
  .then(
    /**
     * @param {Object} result
     * @param {IncomingMessage} result.response
     * @param {string} result.body
     */
    function( result ) {
      // handle result
    }
  )
  .catch(
    /**
     * @param {Error} err
     */
    function( err ) {
      // handle error
    }
  );
```

## license
[MIT License][mit-license]

[coveralls-image]: https://coveralls.io/repos/github/Historypin/node-historypin/badge.svg?branch=master
[coveralls-url]: https://coveralls.io/github/Historypin/node-historypin?branch=master
[david-dm-image]: https://david-dm.org/Historypin/node-historypin.svg
[david-dm-url]: https://david-dm.org/Historypin/node-historypin
[mit-license]: https://raw.githubusercontent.com/Historypin/node-historypin/master/license.txt
[request-debug-url]: https://www.npmjs.com/package/request-debug
[travis-image]: https://travis-ci.org/Historypin/node-historypin.svg?branch=master
[travis-url]: https://travis-ci.org/Historypin/node-historypin
