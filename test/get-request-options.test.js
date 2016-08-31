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
var qs = require( './fixtures/qs' );
var req = require( './fixtures/req' );
var user_options = require( './fixtures/user-options' );

describe( 'getRequestOptions( req, user_options )', function () {
  var request_options = getRequestOptions( req, user_options );

  it( 'should return an Object', function () {
    expect( request_options ).to.be.an( 'object' );
  } );

  describe( 'the Object should contain the following properties:', function () {
    describe( '.method', function () {
      it( 'should be a string', function () {
        expect( request_options.method ).to.be.a( 'string' );
      } );

      it( 'should be set to the default value `get`', function () {
        expect( request_options.method ).to.equal( 'get' );
      } );

      it( 'should be set to the passed in value `post`', function () {
        user_options.method = 'post';
        request_options = getRequestOptions( req, user_options );
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
        request_options = getRequestOptions( req, user_options );
        expect( request_options.qs ).to.equal( qs );
      } );
    } );
  } );
} );
