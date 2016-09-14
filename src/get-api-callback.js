'use strict';

/**
 * module dependencies
 */
var getRequestOptions = require( './get-request-options' );
var getRequestAsBluebird = require( 'request-as-bluebird' );

/**
 * module variables
 */
var OK = 200;

/**
 * @param {Object} user_options
 * @param {string} user_options.api_endpoint
 * @param {string} user_options.project
 *
 * @param {boolean} [user_options.data = {}]
 * @param {boolean} [user_options.debug = false]
 * @param {string} [user_options.method = get]
 * @param {Object} [user_options.qs = {}]
 *
 * @param {Object} [request_headers]
 * @param {Function} callback
 *
 * @throws {Error}
 */
module.exports = function getApiCallback( user_options, request_headers, callback ) {
  if ( !( user_options instanceof Object ) ) {
    throw new Error( 'getApiCallback(): user_options not provided as an Object' );
  }

  if ( !( callback instanceof Function ) ) {
    throw new Error( 'getApiCallback(): callback not provided as a Function' );
  }

  getRequestAsBluebird( getRequestOptions( user_options, request_headers ), user_options.debug )
    .then(
      /**
       * @param {Object} result
       * @param {IncomingMessage} result.response
       * @param {string} result.body
       */
      function ( result ) {
        if ( result.response.statusCode !== OK ) {
          throw new Error( result.response.statusCode + ' ' + result.response.statusMessage );
        }

        callback( null, result.response, result.body );
      }
    )
    .catch(
      /**
       * @param {Error} err
       */
      function ( err ) {
        callback( err );
      }
    );
};
