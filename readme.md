# flatit [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][depstat-image]][depstat-url]

Another implementation of array flatterization. Works recursivly down every nested array.

## Usage

```js
var flat = require('flatit');

flat([]); // []
flat([1,2,3,4,5]); // [1,2,3,4,5]
flat([1,2,3,[],4,5]); // [1,2,3,4,5]
flat([1,2,3,[4,[5],6],7,8]); // [1,2,3,4,5,6,7,8]
```

## API

### flat(array)

Returns flattened array.

## Benchmarks

Run `npm run bench` to test it yourself.

```
                     flatten empty array
      10,523,347 op/s » recursive
      10,818,348 op/s » lodash
       1,898,125 op/s » flatten
      14,539,009 op/s » flatit
      14,306,085 op/s » shifting

                      flatten array of empty arrays
       1,691,271 op/s » recursive
         530,756 op/s » lodash
          81,688 op/s » flatten
       2,197,596 op/s » flatit
         289,523 op/s » shifting

                      flatten already flat array
         962,584 op/s » recursive
       1,965,305 op/s » lodash
          25,468 op/s » flatten
       2,019,313 op/s » flatit
         609,103 op/s » shifting

                      flatten single nested array
         954,896 op/s » recursive
       1,076,957 op/s » lodash
          21,001 op/s » flatten
       9,428,493 op/s » flatit
         482,602 op/s » shifting

                      flatten nested array
       1,252,168 op/s » recursive
         490,876 op/s » lodash
          23,867 op/s » flatten
         703,190 op/s » flatit
         304,862 op/s » shifting

                      flatten big array (depth 2)
           5,811 op/s » recursive
           3,293 op/s » lodash
              48 op/s » flatten
           3,753 op/s » flatit
           1,554 op/s » shifting


  Suites:  6
  Benches: 30
  Elapsed: 48,250.26 ms
```

# License
MIT (c) 2014 Vsevolod Strukchinsky (floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/flatit
[npm-image]: http://img.shields.io/npm/v/flatit.svg

[travis-url]: https://travis-ci.org/floatdrop/flatit
[travis-image]: http://img.shields.io/travis/floatdrop/flatit.svg

[depstat-url]: https://david-dm.org/floatdrop/flatit
[depstat-image]: https://david-dm.org/floatdrop/flatit.svg?theme=shields.io
