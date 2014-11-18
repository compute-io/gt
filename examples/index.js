'use strict';

var gt = require( './../lib' );

// Simulate some data...
var data = new Array( 100 );

for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random()*100 );
}

var out = gt( data, 50 );

// Count the number of values exceeding 50...
var sum = 0;
for ( var j = 0; j < out.length; j++ ) {
	sum += out[ j ];
}

console.log( 'Total: %d', sum );
