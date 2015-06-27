/* global describe, it, require */
'use strict';

// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	gt = require( './../lib/element.js' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'element gt', function tests() {

	it( 'should export a function', function test() {
		expect( gt ).to.be.a( 'function' );
	});

	it( 'should correctly compare different values', function test() {
		assert.strictEqual( gt( 2, 4 ), 0 );
		assert.strictEqual( gt( 900, 800 ), 1 );
		assert.strictEqual( gt( 'A', 'C' ), 0 );
		assert.strictEqual( gt( 'c', 'C' ), 1 );
	});

});
