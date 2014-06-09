var static = require('node-static');

var fileServer = new static.Server('./public');
var port = process.env.PORT || 8080;

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        fileServer.serve(request, response);
    }).resume();
}).listen(port);
