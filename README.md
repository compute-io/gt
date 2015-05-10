Greater Than
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Computes an element-wise comparison (greater than) of an array.


## Installation

``` bash
$ npm install compute-gt
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var gt = require( 'compute-gt' );
```

#### gt( arr, x[, opts] )

Computes an element-wise comparison (greater than) for each input `array` element. `x` may either be an `array` of equal length or a single value (`number` or `string`).

The function returns an `array` with a length equal to that of the input `array`. Each output `array` element is either `0` or `1`. A value of `1` means that an element is greater than a compared value and `0` means that an element is __not__ greater than a compared value.

``` javascript
var arr = [ 5, 3, 8, 3, 2 ],
	out;

// Single comparison value:
out = gt( arr, 4 );
// returns [ 1, 0, 1, 0, 0 ]

// Array of comparison values:
out = gt( arr, [ 6, 2, 6, 7, 3 ] );
// returns [ 0, 1, 1, 0, 0 ]
```

The function accepts the following `options`:

*  __copy__: `boolean` indicating whether to return a new `array`. Default: `true`.
*  __accessor__: accessor `function` for accessing values in object `arrays`.

To mutate the input `array` (e.g., when input values can be discarded or when optimizing memory usage), set the `copy` option to `false`.

``` javascript
var arr = [ 5, 3, 8, 3, 2 ];

var out = gt( arr, 4, {
	'copy': false
});
// returns [ 1, 0, 1, 0, 0 ]

console.log( arr === out );
// returns true
```

For object `arrays`, provide an accessor `function` for accessing `array` values.

``` javascript
var data = [
	['beep', 5],
	['boop', 3],
	['bip', 8],
	['bap', 3],
	['baz', 2]
];

function getValue( d, i ) {
	return d[ 1 ];
}

var out = gt( data, 4, {
	'accessor': getValue
});
// returns [ 1, 0, 1, 0, 0 ]
```

When comparing values between two object `arrays`, provide an accessor `function` which accepts `3` arguments.

``` javascript
var data = [
	['beep', 5],
	['boop', 3],
	['bip', 8],
	['bap', 3],
	['baz', 2]
];

var arr = [
	{'x': 4},
	{'x': 5},
	{'x': 6},
	{'x': 5},
	{'x': 3}
];

function getValue( d, i, j ) {
	if ( j === 0 ) {
		return d[ 1 ];
	}
	return d.x;
}

var out = gt( data, arr, {
	'accessor': getValue
});
// returns [ 1, 0, 1, 0, 0 ]
```

__Note__: `j` corresponds to the input `array` index, where `j=0` is the index for the first input `array` and `j=1` is the index for the second (comparison) input `array`.




## Examples

``` javascript
var gt = require( 'compute-gt' ),
	sum = require( 'compute-sum' );

// Simulate some data...
var data = new Array( 100 );
for ( var i = 0; i < data.length; i++ ) {
	data[ i ] = Math.round( Math.random()*100 );
}

var out = gt( data, 50 );

// Count the number of values exceeding 50...
var count = sum( out );

console.log( 'Total: %d', count );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2014-2015. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/compute-gt.svg
[npm-url]: https://npmjs.org/package/compute-gt

[travis-image]: http://img.shields.io/travis/compute-io/gt/master.svg
[travis-url]: https://travis-ci.org/compute-io/gt

[coveralls-image]: https://img.shields.io/coveralls/compute-io/gt/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/gt?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/gt.svg
[dependencies-url]: https://david-dm.org/compute-io/gt

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/gt.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/gt

[github-issues-image]: http://img.shields.io/github/issues/compute-io/gt.svg
[github-issues-url]: https://github.com/compute-io/gt/issues
