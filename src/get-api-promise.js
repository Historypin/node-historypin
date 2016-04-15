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
 * @param {Object} user_options
 * @returns {Promise}
 */
module.exports = function getApiPromise( req, user_options ) {
  user_options = user_options || {};
  return requestHelper( getRequestOptions( req, user_options ), user_options.debug );
};