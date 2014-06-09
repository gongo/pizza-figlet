var static = require('node-static');

var fileServer = new static.Server('./public');
var port = process.env.PORT || 8080;

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(port);


if (process.env.NODETIME_ACCOUNT_KEY) {
    require('nodetime').profile({
        accountKey: process.env.NODETIME_ACCOUNT_KEY,
        appName: 'pizza-figlet' // optional
    });
}
