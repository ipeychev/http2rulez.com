var spdy = require('spdy');
var fs = require('fs');
var path = require('path');
var static = require('node-static'),
    fileServer;

var options = {
    key: fs.readFileSync(path.join(__dirname, '..', '..', 'cert/http2rulez.com.key')),
    cert: fs.readFileSync(path.join(__dirname, '..', '..', 'cert/http2rulez.com.cert'))
};

var file = new static.Server('../public');

spdy.createServer(options, function(request, response) {
    request.addListener('end', function () {
        //
        // Serve files!
        //
        file.serve(request, response);
    }).resume();
}).listen(8082);
