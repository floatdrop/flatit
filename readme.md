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
     133,861,031 op/s » flatit
      43,560,353 op/s » lodash
         400,768 op/s » flatten

                      flatten array of empty arrays
       1,914,315 op/s » flatit
         436,306 op/s » lodash
          99,419 op/s » flatten

                      flatten already flat array
       3,545,274 op/s » flatit
       2,450,495 op/s » lodash
          22,698 op/s » flatten

                      flatten single nested array
      51,684,086 op/s » flatit
       1,459,701 op/s » lodash
          22,110 op/s » flatten

                      flatten nested array
         740,536 op/s » flatit
         435,556 op/s » lodash
          25,547 op/s » flatten
```

# License
MIT (c) 2014 Vsevolod Strukchinsky (floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/flatit
[npm-image]: http://img.shields.io/npm/v/flatit.svg

[travis-url]: https://travis-ci.org/floatdrop/flatit
[travis-image]: http://img.shields.io/travis/floatdrop/flatit.svg

[depstat-url]: https://david-dm.org/floatdrop/flatit
[depstat-image]: https://david-dm.org/floatdrop/flatit.svg?theme=shields.io
