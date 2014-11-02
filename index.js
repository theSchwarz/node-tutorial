//convention is to keep a clean index file that imports other modules.

var server = require("./server");
var router = require("./router");
var handler = require("./handler");

//this is much better design than having the server module import the router module.
//that way if we want to swap out the router module later it's simpler.
//in the new design the start function takes in a route function.

var handlerMapping  = {
	"/": handler.home,
	"/output": handler.output,
	"/input": handler.getUserData,
	"/foo": handler.getUserData
};

server.start(router.route, handlerMapping);

