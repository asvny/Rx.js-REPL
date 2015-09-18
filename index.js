var os     = require('os');
var rx     = require('rx');
var rxNode = require('rx-node');

console.log('Welcome to Rx.js REPL !');

function a() {
	var repl   =require('repl'),
		rxREPL =repl.start({ prompt : 'RX > '});

		rxREPL.context.rx=rx;
		rxREPL.context.rxNode=rxNode;

		Object.keys(rx).map(function(func){

			rxREPL.context[func]=rx[func];
		})
}

a();
