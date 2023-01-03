var lodash = require('lodash');

exports.init = function(app){
    const CM = require('./componentManager');
    console.log('[NCM] - Index.js - Initialization');
    return new CM(app);
}