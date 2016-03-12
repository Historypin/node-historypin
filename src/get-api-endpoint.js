'use strict';

/**
 * @param {Object} user_options
 * @param {string} user_options.api_endpoint
 * @param {string} user_options.project
 *
 * @returns {*}
 */
module.exports = function getApiEdpoint( user_options ) {
  var result;

  if ( !( user_options instanceof Object ) ) {
    return;
  }

  if ( typeof user_options.api_endpoint !== 'string' ) {
    return;
  }

  if ( typeof user_options.project !== 'string' ) {
    return;
  }

  switch ( user_options.api_endpoint ) {
    case 'get-gallery':
      result = 'https://www.historypin.org/en/api/%s/pin/get_gallery.json';
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