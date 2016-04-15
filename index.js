'use strict';

var historypin;

historypin = {};
historypin.callApi = require( './src/call-api' );
historypin.getApiPromise = require( './src/get-api-promise' );

module.exports = historypin;