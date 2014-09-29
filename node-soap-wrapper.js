var soap = require('soap');
var nodefn = require('when/node');


function NodeSOAPWrapper() {
    this._url = undefined;
    this._options = undefined;
}

/**
 * @param {string} url
 * @param {Object} options
 */
NodeSOAPWrapper.prototype.createClient = function (url, options) {
    this._url = url;
    this._options = options || {};

    var promisedCreateClient = nodefn.call(soap.createClient, this._url, this._options);

    return promisedCreateClient;
}

/**
 * @param {Object} client
 */
NodeSOAPWrapper.prototype.liftAll = function (client) {
    var lift = nodefn.liftAll(client);

    return lift;
};


module.exports.NodeSOAPWrapper = NodeSOAPWrapper;