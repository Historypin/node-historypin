'use strict';

/**
 * module variables
 */
var getRequestOptions;
var requestHelper;

/**
 * module dependencies
 */
getRequestOptions = require( './get-request-options' );
requestHelper = require( 'node-helpers' ).requestHelper;

/**
 * @param {IncomingMessage} req
 *
 * @param {Object} user_options
 * @param {string} user_options.api_endpoint
 * @param {string} user_options.project
 * @param {boolean} [user_options.debug]
 * @param {string} [user_options.method]
 * @param {Object} [user_options.qs]
 *
 * @param {Function} callback
 *
 * @throws {Error}
 */
module.exports = function callApi( req, user_options, callback ) {
  if ( !( callback instanceof Function ) ) {
    throw new Error( 'callApi(): callback not provided as a Function' );
  }

  requestHelper( getRequestOptions( req, user_options ), user_options.debug )
    .then(
      function ( result ) {
        var json;
        json = JSON.parse( result );
        callback.call( this, null, json );
      }
    )
    .catch(
      /**
       * @param {Error} err
       */
      function ( err ) {
        callback.call( this, err );
      }
    );
};
