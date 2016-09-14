'use strict';

/**
 * module dependencies
 */
var getRequestOptions = require( './get-request-options' );
var getRequestAsBluebird = require( 'request-as-bluebird' );

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
 *
 * @throws {Error}
 * @returns {Promise}
 */
module.exports = function getApiPromise( user_options, request_headers ) {
  if ( !( user_options instanceof Object ) ) {
    throw new Error( 'getApiPromise(): user_options not provided as an Object' );
  }

  return getRequestAsBluebird( getRequestOptions( user_options, request_headers ), user_options.debug );
};
