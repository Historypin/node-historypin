'use strict';

/**
 * module dependencies
 */
var getApiEndpoint = require( './get-api-endpoint' );
var getGenericRequestOptions = require( 'generic-request-options' );

/**
 * @param {Object} user_options
 * @param {Object} [request_headers]
 *
 * @returns {Object}
 */
module.exports = function getRequestOptions( user_options, request_headers ) {
  var options = getGenericRequestOptions( user_options, request_headers );

  options.method = user_options.method || 'get';
  options.qs = user_options.qs || {};
  options.data = user_options.data || {};
  options.url = getApiEndpoint( user_options );

  return options;
};
