'use strict';

/**
 * module variables
 */
var endpoints = {
  'get-gallery': 'https://www.historypin.org/en/api/%s/pin/get_gallery.json',
  'get-map': 'https://www.historypin.org/en/api/%s/pin/get_map.json',
  'get-pin': 'https://www.historypin.org/en/api/%s/pin/get.json',
  'get-project': 'https://www.historypin.org/en/api/%s/projects/get.json',
  'listing': 'https://www.historypin.org/en/api/projects/listing.json'
};

/**
 * @param {Object} user_options
 * @param {string} user_options.api_endpoint
 * @param {string} user_options.project
 *
 * @throws {Error}
 *
 * @returns {string|undefined}
 */
module.exports = function getApiEndpoint( user_options ) {
  var result;

  if ( !( user_options instanceof Object ) ) {
    throw new Error( 'getApiEndpoint(): user_options not provided as an Object' );
  }

  if ( typeof user_options.api_endpoint !== 'string' ) {
    throw new Error( 'getApiEndpoint(): user_options.api_endpoint not provided as a string' );
  }

  if ( typeof user_options.project !== 'string' ) {
    throw new Error( 'getApiEndpoint(): user_options.project not provided as a string' );
  }

  result = endpoints[ user_options.api_endpoint ];

  if ( typeof result !== 'string' ) {
    throw new Error( 'getApiEndpoint(): api endpoint `' + user_options.api_endpoint + '` is not yet handled' );
  }

  return result.replace( '%s', user_options.project );
};
