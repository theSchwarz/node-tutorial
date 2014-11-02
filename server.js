//Server module.
//Making something a module means we need to EXPORT parts of functionality 
//that we want to make available to other scripts.

//requires http module from Node, makes this module accessible as an object via var http
var http = require("http");
var url = require("url"); //allows us to extract parts of the URL, including a query string.
var querystring = require("querystring"); //allows us to unpack query params or POST params.

function start(route,handlerMapping) {
	http.createServer(onRequest).listen(8888);
	console.log("web server is live!");

	function onRequest(request,response) {
		console.log("request type is " + request.method);
		var pathname = url.parse(request.url).pathname;
		console.log("Request for " + pathname + " received.");
		var postData = "";
		
		if (request.method === 'GET') {
			route(pathname,handlerMapping,response, postData);
		}

		else if (request.method === 'POST') {
			request.setEncoding("utf8");
			request.addListener("data", function(postDataChunk) {
				postData += postDataChunk;
				console.log("Received POST chunk "); //+ postDataChunk);
			});
			request.addListener("end", function() {
				route(pathname, handlerMapping, response, postData);
			});
		}
		
	}
}

//makes start function available via an externally facing variable named start.
exports.start = start;






//http.createServer returns an object that can listen for requests on port 8888.
//we then pass it a function that defines behavior for the server.