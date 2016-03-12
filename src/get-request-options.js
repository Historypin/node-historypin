'use strict';

/**
 * module variables
 */
var getApiEndpoint;
var getGenericRequestOptions;

/**
 * variable assignments
 */
getApiEndpoint = require( './get-api-endpoint' );
getGenericRequestOptions = require( 'node-helpers' ).getGenericRequestOptions;

/**
 * @param {IncomingMessage} req
 * @param {Object} user_options
 * @param {string} user_options.method
 * @returns {*}
 */
module.exports = function getRequestOptions( req, user_options ) {
  var options;

  options = {};
  options.method = user_options.method || 'get';
  options.url = getApiEndpoint( user_options );
  options = getGenericRequestOptions( req, options, user_options );
  options.qs = user_options.qs;

  return options;
};