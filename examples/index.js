'use strict';

var matrix = require( 'dstructs-matrix' ),
	gt = require( './../lib' ),
	sum = require( 'compute-sum' );

var data,
	mat,
	out,
	tmp,
	i;

// ----
// Plain arrays...
data = new Array( 100 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random()*100 );
}
out = gt( data, 50 );
console.log( 'Arrays: %s\n', out );

// Count the number of values exceeding 50...
var count = sum( out );
console.log( 'Total: %d \n', count );

// ----
// Object arrays (accessors)...
function getValue( d ) {
	return d.x;
}
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = {
		'x': data[ i ]
	};
}
out = gt( data, 50, {
	'accessor': getValue
});
console.log( 'Accessors: %s\n', out );


// ----
// Typed arrays...
data = new Float64Array( 100 );
for ( i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random()*20 );
}
tmp = gt( data, 50 );
out = '';
for ( i = 0; i < data.length; i++ ) {
	out += tmp[ i ];
	if ( i < data.length-1 ) {
		out += ',';
	}
}
console.log( 'Typed arrays: %s\n', out );


// ----
// Matrices...
mat = matrix( data, [10,10], 'float64' );
out = gt( mat, 50 );
console.log( 'Matrix: %s\n', out.toString() );
