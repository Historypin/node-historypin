'use strict';

/**
 * module variables
 */
var getRequestOptions;
var requestHelper;

/**
 * variable assignments
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

  requestHelper( getRequestOptions( req, user_options ), true )
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

  return { test: "test" };
};
