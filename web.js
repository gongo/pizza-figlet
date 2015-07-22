var express = require('express');
var app     = express();
var figlet  = require('figlet');
var port    = process.env.PORT || 8080;

app.use('/', express.static(__dirname + '/public'));

app.get('/figlet', function(req, res) {
    figlet(req.query.text, 'Old Banner', function(err, data) {
        if (err) {
            console.dir(err);
            res.send(500, { error: err.code });
        } else {
            res.send(data);
        }
    });
});

var server = app.listen(port, function() {
    console.log(__dirname + '/public');
    console.log('Listening on port %d', server.address().port);
});

require('newrelic');
