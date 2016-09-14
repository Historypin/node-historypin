/* globals describe, it */
'use strict';

/**
 * module dependencies
 */
var expect = require( 'chai' ).expect;
var getRequestOptions = require( '../src/get-request-options' );

/**
 * module variables
 */
var qs = require( './fixtures/qs.json' );
var request_headers = require( './fixtures/request-headers.json' );
var user_options = require( './fixtures/user-options.json' );
var user_options_headers = require( './fixtures/user-options-headers.json' );

describe( 'getRequestOptions( req, user_options )', function () {
  var request_options = getRequestOptions( user_options );

  it( 'should return an Object', function () {
    expect( request_options ).to.be.an( 'object' );
  } );

  describe( 'the returned object should contain the following properties:', function () {
    describe( '.method', function () {
      it( 'should be a string', function () {
        expect( request_options.method ).to.be.a( 'string' );
      } );

      it( 'should be set to the default value `get`', function () {
        expect( request_options.method ).to.equal( 'get' );
      } );

      it( 'should be set to the passed in value `post`', function () {
        user_options.method = 'post';
        request_options = getRequestOptions( user_options );
        expect( request_options.method ).to.equal( 'post' );
      } );
    } );

    describe( '.url', function () {
      it( 'should be a string', function () {
        expect( request_options.url ).to.be.a( 'string' );
      } );
    } );

    describe( '.headers', function () {
      it( 'should be an object', function () {
        expect( request_options.headers ).to.be.an( 'object' );
      } );

      it( 'should contain the common proxy headers passed to the function via the request_headers param', function () {
        request_options = getRequestOptions( user_options, request_headers );
        expect( request_options.headers ).to.contain.keys( request_headers );
      } );

      it( 'should contain the additional headers passed to the function via the user_options param', function () {
        user_options.headers = user_options_headers;

        request_options = getRequestOptions( user_options, request_headers );
        expect( request_options.headers ).to.contain.keys( user_options_headers );
      } );
    } );

    describe( '.timeout', function () {
      it( 'should be a number', function () {
        expect( request_options.timeout ).to.be.a( 'number' );
      } );
    } );

    describe( '.qs', function () {
      it( 'should be an object', function () {
        expect( request_options.qs ).to.be.an( 'object' );
      } );

      it( 'should be set to the passed in value `post`', function () {
        user_options.qs = qs;
        request_options = getRequestOptions( user_options );
        expect( request_options.qs ).to.equal( qs );
      } );
    } );
  } );
} );
