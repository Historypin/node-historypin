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
 * @param {Function} callback
 */
module.exports = function callApi( req, user_options, callback ) {
  if ( !( callback instanceof Function ) ) {
    throw new Error( 'callback not provided as a Function' );
  }

  user_options = user_options || {};

  requestHelper( getRequestOptions( req, user_options ), user_options.debug )
    .then(
      function ( result ) {
        var json;
        json = JSON.parse( result );
        callback.call( this, json );
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
