var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use('/', express.static(__dirname + '/public'));

var server = app.listen(port, function() {
    console.log(__dirname + '/public');
    console.log('Listening on port %d', server.address().port);
});

if (process.env.NODETIME_ACCOUNT_KEY) {
    require('nodetime').profile({
        accountKey: process.env.NODETIME_ACCOUNT_KEY,
        appName: 'pizza-figlet' // optional
    });
}
