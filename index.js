var os     = require('os');
var rx     = require('rx');
var rxNode = require('rx-node');

console.log('Welcome to Rx.js REPL !');

module.exports= function() {

	var repl   =require('repl'),
		rxREPL =repl.start({ prompt : 'rx > '});
	    require('repl.history')(rxREPL, process.env.HOME + '/.rx_history');

		rxREPL.context.rx=rx;
		rxREPL.context.rxNode=rxNode;

		Object.keys(rx).map(function(func){

			rxREPL.context[func]=rx[func];
		})
};


