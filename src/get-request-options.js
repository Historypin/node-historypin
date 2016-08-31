'use strict';

/**
 * module dependencies
 */
var getApiEndpoint = require( './get-api-endpoint' );
var getGenericRequestOptions = require( 'node-helpers' ).getGenericRequestOptions;

/**
 * @param {IncomingMessage} req
 *
 * @param {Object} user_options
 * @param {string} user_options.api_endpoint
 * @param {string} [user_options.method]
 * @param {string} user_options.project
 * @param {string} [user_options.qs]
 *
 * @returns {Object}
 */
module.exports = function getRequestOptions( req, user_options ) {
  var options;

  options = {};
  options.method = user_options.method || 'get';
  options.url = getApiEndpoint( user_options );
  options = getGenericRequestOptions( req, options, user_options );
  options.qs = user_options.qs || {};

  return options;
};
