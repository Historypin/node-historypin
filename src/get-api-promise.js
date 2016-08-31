'use strict';

/**
 * module dependencies
 */
var getRequestOptions = require( './get-request-options' );

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
 * @throws {Error}
 *
 * @returns {Promise}
 */
var requestHelper = require( 'node-helpers' ).requestHelper;

module.exports = function getApiPromise( req, user_options ) {
  if ( !( user_options instanceof Object ) ) {
    throw new Error( 'getApiPromise(): user_options not provided as an Object' );
  }

  return requestHelper( getRequestOptions( req, user_options ), user_options.debug );
};
