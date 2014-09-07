var http2 = require('http2');
var fs = require('fs');
var path = require('path');
var static = require('node-static'),
    fileServer;

var options = {
    key: fs.readFileSync(path.join(__dirname, '..', '..', 'cert/http2rulez.com.key')),
    cert: fs.readFileSync(path.join(__dirname, '..', '..', 'cert/http2rulez.com.cert'))
};

var file = new static.Server('../public');

var dependencies = [
	'/assets/css/bootstrap.css',
	'/assets/css/magnific-popup.css',
	'/assets/css/font-awesome.css',
	'/assets/css/header.css',
	'/assets/css/main.css',
	'/assets/images/country-1170x400.jpeg',
	'/js/jquery-1.11.0.js',
	'/js/jquery-ui.min.js',
	'/js/bootstrap.min.js',
	'/js/jquery.magnific-popup.js',
	'/js/shuffle.js',
	'/js/jquery.shapeshift.js',
	'/js/homepage.js',
	'/js/profiler.js',
	'/assets/images/boat-1170x400.jpeg',
	'/assets/images/snow-1170x400.jpeg',
	'/assets/images/beach-1170x400.jpeg',
	'/assets/images/glass-building-1170x400.jpeg',
	'/assets/images/person_3.png',
	'/assets/images/rila_small.jpg',
	'/assets/images/varna.jpeg',
	'/assets/images/tsarevets_small.jpg',
	'/assets/images/london.jpeg',
	'/assets/images/cibeles_small.jpg',
	'/assets/images/recife_small.jpg',
	'/assets/images/tree.jpeg',
	'/assets/images/san-fran.jpeg',
	'/assets/images/cheetah.jpeg',
	'/assets/images/altscale-logo-200px.png',
	'/assets/fonts/fontawesome-webfont.woff?v=4.1.0',
	'/assets/fonts/glyphicons-halflings-regular.woff'
];

http2.createServer(options, function(request, response) {
    request.addListener('end', function () {
        var filename = path.join(__dirname, request.url);

        console.log('Request:' + request.url);

         if (response.push && (request.url === '/' || request.url === '/index.html')) {
				response.writeHead('200');
           	
				dependencies.forEach(function(item) {
					console.log('Pushing resouce: ' + item);

					var push = response.push(item);

					push.writeHead('200');

					if (item === '/assets/fonts/fontawesome-webfont.woff?v=4.1.0') {
						item = '/assets/fonts/fontawesome-webfont.woff';
					}

					fs.createReadStream(path.join(__dirname, '..', 'public', item)).pipe(push);
				});
		 
				fs.createReadStream(path.join('..', 'public', 'index.html')).pipe(response);
		}
		else {
			file.serve(request, response);
		}
    }).resume();
}).listen(4443);
