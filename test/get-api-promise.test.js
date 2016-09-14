/* globals describe, it */
'use strict';

/**
 * module dependencies
 */
var expect = require( 'chai' ).expect;
var getApiPromise = require( '../src/get-api-promise' );

/**
 * module variables
 */
var user_options = require( './fixtures/user-options.json' );

describe( 'getApiPromise( user_options, request_headers )', function () {

  it( 'should return a Promise like object', function () {
    var ApiPromise = getApiPromise( user_options );
    expect( ApiPromise.then ).to.be.a( 'function' );
    expect( ApiPromise.catch ).to.be.a( 'function' );
  } );

  it( 'should throw an Error if user_options is not an Object', function () {
    expect( getApiPromise ).to.throw( 'getApiPromise(): user_options not provided as an Object' );
  } );
} );
