'use strict';

var http = require('http'),
    staticServer = require('node-static').Server,

    fileServer;

fileServer = new staticServer('../public');

http.createServer(function(request, response) {
    request.addListener('end', function() {
        fileServer.serve(request, response);
    }).resume();
}).listen(8080);
