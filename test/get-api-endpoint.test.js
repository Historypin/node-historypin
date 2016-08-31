/* globals describe, it */
'use strict';

/**
 * module dependencies
 */
var expect = require( 'chai' ).expect;
var getApiEndpoint = require( '../src/get-api-endpoint' );

describe( 'getApiEndpoint( user_options )', function () {
  it( 'should return an api endpoint with the project properly inserted in the url', function () {
    var url;

    url = getApiEndpoint( {
      api_endpoint: 'get-map',
      project: 'test'
    } );

    expect( url ).to.equal( 'https://www.historypin.org/en/api/test/pin/get_map.json' );
  } );

  describe( 'should throw an error', function () {
    it( 'if user_options is not an Object', function () {
      expect( getApiEndpoint ).to.throw( 'getApiEndpoint(): user_options not provided as an Object' );
    } );

    it( 'if user_options.api_endpoint is not a string', function () {
      expect( getApiEndpoint.bind( null, { project: '' } ) ).to.throw( 'getApiEndpoint(): user_options.api_endpoint not provided as a string' );
    } );

    it( 'if user_options.project is not a string', function () {
      expect( getApiEndpoint.bind( null, { api_endpoint: '' } ) ).to.throw( 'getApiEndpoint(): user_options.project not provided as a string' );
    } );

    it( 'if user_options.api_endpoint is not a handled endpoint', function () {
      expect( getApiEndpoint.bind(
        null, {
          api_endpoint: 'test',
          project: ''
        } )
      ).to.throw( 'getApiEndpoint(): api endpoint `test` is not yet handled' );
    } );
  } );
} );
