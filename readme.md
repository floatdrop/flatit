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
      77,004,991 op/s » flatit
      29,516,552 op/s » lodash
       2,854,918 op/s » flatten
      27,666,675 op/s » recursive
      78,193,067 op/s » shifting

                      flatten array of empty arrays
       2,949,511 op/s » flatit
         589,829 op/s » lodash
         126,015 op/s » flatten
       2,196,373 op/s » recursive
      71,027,283 op/s » shifting

                      flatten already flat array
       2,444,153 op/s » flatit
       2,550,608 op/s » lodash
          26,801 op/s » flatten
       1,106,839 op/s » recursive
      68,781,138 op/s » shifting

                      flatten single nested array
      42,072,911 op/s » flatit
       1,260,512 op/s » lodash
          24,801 op/s » flatten
       1,062,021 op/s » recursive
      66,500,493 op/s » shifting

                      flatten nested array
         825,166 op/s » flatit
         548,787 op/s » lodash
          29,171 op/s » flatten
       1,523,168 op/s » recursive
      71,037,735 op/s » shifting

                      flatten big array (depth 2)
           4,218 op/s » flatit
           3,860 op/s » lodash
              61 op/s » flatten
           6,943 op/s » recursive
      64,904,537 op/s » shifting


  Suites:  6
  Benches: 30
  Elapsed: 50,804.43 ms
```

# License
MIT (c) 2014 Vsevolod Strukchinsky (floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/flatit
[npm-image]: http://img.shields.io/npm/v/flatit.svg

[travis-url]: https://travis-ci.org/floatdrop/flatit
[travis-image]: http://img.shields.io/travis/floatdrop/flatit.svg

[depstat-url]: https://david-dm.org/floatdrop/flatit
[depstat-image]: https://david-dm.org/floatdrop/flatit.svg?theme=shields.io
