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
      11,242,685 op/s » recursive
      10,897,869 op/s » lodash
       2,562,129 op/s » flatten
      14,829,264 op/s » flatit
      15,150,337 op/s » shifting
      11,902,776 op/s » pop

                      flatten array of empty arrays
       1,813,326 op/s » recursive
         558,774 op/s » lodash
         123,880 op/s » flatten
       2,273,380 op/s » flatit
         297,519 op/s » shifting
         395,793 op/s » pop

                      flatten already flat array
       1,009,670 op/s » recursive
       2,070,110 op/s » lodash
          28,762 op/s » flatten
       2,083,666 op/s » flatit
         648,079 op/s » shifting
         921,404 op/s » pop

                      flatten single nested array
         876,355 op/s » recursive
       1,051,872 op/s » lodash
          22,871 op/s » flatten
      10,293,846 op/s » flatit
         526,062 op/s » shifting
         873,115 op/s » pop

                      flatten nested array
       1,361,593 op/s » recursive
         531,594 op/s » lodash
          29,133 op/s » flatten
         768,345 op/s » flatit
         331,482 op/s » shifting
         554,377 op/s » pop

                      flatten big array (depth 2)
           6,990 op/s » recursive
           3,761 op/s » lodash
              60 op/s » flatten
           4,237 op/s » flatit
           1,717 op/s » shifting
           3,419 op/s » pop


  Suites:  6
  Benches: 36
  Elapsed: 59,500.93 ms
```

# License
MIT (c) 2014 Vsevolod Strukchinsky (floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/flatit
[npm-image]: http://img.shields.io/npm/v/flatit.svg

[travis-url]: https://travis-ci.org/floatdrop/flatit
[travis-image]: http://img.shields.io/travis/floatdrop/flatit.svg

[depstat-url]: https://david-dm.org/floatdrop/flatit
[depstat-image]: https://david-dm.org/floatdrop/flatit.svg?theme=shields.io
