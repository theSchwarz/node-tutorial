//request handler function

var querystring = require("querystring");

function home(response,postData) {
	console.log("Request handler 'home' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"}); //returns 200, sets header
	response.write("home: Josh is awesome");
	response.end();
}

function output(response,postData) {
	console.log("Request handler 'upload' was called.");
	response.writeHead(200, {"Content-Type": "text/plain"}); //returns 200, sets header
	response.write("You entered " + querystring.parse(postData).text);
	response.end();
}

function getUserData(response,postData) {
	console.log("Request handler 'getUserData' was called.");

	var body = '<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8" /></head><body><form action="/output" method="post"><textarea name="text" rows="20" cols="60"></textarea></body><input type="submit" value="Submit text" /></form></html';
	response.writeHead(200, {"Content-Type": "text/html"}); //returns 200, sets header
	response.write(body);
	response.end();
}

exports.home = home;
exports.output = output;
exports.getUserData = getUserData;