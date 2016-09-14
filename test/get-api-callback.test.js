/* globals describe, it */
'use strict';

/**
 * module dependencies
 */
var expect = require( 'chai' ).expect;
var getApiCallback = require( '../src/get-api-callback' );
var user_options = require( './fixtures/user-options.json' );
var user_options_unknown = require( './fixtures/user-options-unknown-project.json' );


describe( 'getApiCallback( user_options, request_headers, callback )', function () {
  it( 'should throw an Error if `user_options` is not an Object', function () {
    expect( getApiCallback ).to.throw( Error, 'getApiCallback(): user_options not provided as an Object' );
  } );

  it( 'should throw an Error if `callback` is not a Function', function () {
    var ApiCallback = function () {
      getApiCallback( {}, null );
    };

    expect( ApiCallback ).to.throw( Error, 'getApiCallback(): callback not provided as a Function' );
  } );

  it( 'should call the callback with an error', function ( done ) {
    getApiCallback( user_options_unknown, null, function ( err ) {
      expect( err ).to.be.an( 'error' );
      done();
    } );
  } );

  it( 'should call the callback with the response as an object and the body as a string', function ( done ) {
    getApiCallback( user_options, null, function ( err, response, body ) {
      expect( err ).to.not.exist;
      expect( response ).to.be.an( 'object' );
      expect( body ).to.be.a( 'string' );
      done();
    } );
  } );
} );
