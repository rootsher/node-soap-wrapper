var NodeSOAPWrapper = require('../node-soap-wrapper').NodeSOAPWrapper;

var nodeSOAPWrapper = new NodeSOAPWrapper();

var WSDL_URL = 'https://dhl24.com.pl/webapi2';
var WSDL_OPTIONS = {};

nodeSOAPWrapper.createClient(WSDL_URL, WSDL_OPTIONS).then(nodeSOAPWrapper.liftAll).done(function createClientResolve(client) {
    client.getVersion().done(function getVersionResolve(version) {
        console.log('versionResult', version);
    }, function getVersionReject(getVersionError) {
        console.error('getVersionError', getVersionError);
    });
}, function createClientReject(createClientError) {
    console.error('createClientError', createClientError);
});