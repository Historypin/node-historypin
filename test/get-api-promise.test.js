'use strict';

/**
 * module dependencies
 */
var expect = require( 'chai' ).expect;
var getApiPromise = require( '../src/get-api-promise' );

describe( 'getApiPromise( req, user_options )', function () {
  var req = require( './fixtures/req.json' );
  var user_options = require( './fixtures/user-options.json' );

  it( 'should return a Promise like Object', function () {
    var ApiPromise = getApiPromise( req, user_options );

    expect( ApiPromise.then ).to.be.a( 'function' );
    expect( ApiPromise.catch ).to.be.a( 'function' );
  } );

  describe( 'should throw an Error', function () {
    it( 'if user_options is not an Object', function () {
      expect( getApiPromise ).to.throw( 'getApiPromise(): user_options not provided as an Object' );
    } );
  } );
} );
