//requires http module from Node, makes this module accessible as an object via var http
var http = require("http");
var url = require("url"); //allows us to extract parts of the URL, including a query string.
var querystring = require("querystring"); //allows us to unpack query params or POST params.

//response object is to pass on to the handlers. 
function route(pathname, handlerMapping, response, postData) {

	console.log("About to route a request for " + pathname);
	console.log("handler for " + pathname + " is " + handlerMapping[pathname]);

	//makes sure that there is a handler function associated with the pathname in the handler map.
	if (typeof handlerMapping[pathname] === 'function') {
		console.log("correct handler identified in router: " + handlerMapping[pathname]);
		handlerMapping[pathname](response, postData);
	}

	else {
		console.log("No handler found for " + pathname);
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.write("Page not found. Sorry brAh");
	}
}

exports.route = route;

