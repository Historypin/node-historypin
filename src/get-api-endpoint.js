'use strict';

/**
 * @param {Object} user_options
 * @param {string} user_options.api_endpoint
 * @param {string} user_options.project
 *
 * @returns {string|undefined}
 */
module.exports = function getApiEdpoint( user_options ) {
  var result;

  if ( !( user_options instanceof Object ) ) {
    console.warn( 'getApiEdpoint(): user_options not provided as an Object' );
    return;
  }

  if ( typeof user_options.api_endpoint !== 'string' ) {
    console.warn( 'getApiEdpoint(): user_options.api_endpoint not provided as a string' );
    return;
  }

  if ( typeof user_options.project !== 'string' ) {
    console.warn( 'getApiEdpoint(): user_options.project not provided as a string' );
    return;
  }

  switch ( user_options.api_endpoint ) {
    case 'get-gallery':
      result = 'https://www.historypin.org/en/api/%s/pin/get_gallery.json';
      break;

    case 'get-map':
      result = 'https://www.historypin.org/en/api/%s/pin/get_map.json';
      break;

    case 'get-pin':
      result = 'https://www.historypin.org/en/api/%s/pin/get.json';
      break;

    case 'get-project':
      result = 'https://www.historypin.org/en/api/%s/projects/get.json';
      break;

    case 'listing':
      result = 'http://www.historypin.org/en/api/projects/listing.json';
      break;
  }

  return result.replace( '%s', user_options.project );
};