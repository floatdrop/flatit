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
     141,433,792 op/s » flatit
      45,311,075 op/s » lodash
         415,161 op/s » flatten

                      flatten array of empty arrays
       3,011,512 op/s » flatit
         447,007 op/s » lodash
          97,515 op/s » flatten

                      flatten already flat array
       3,675,987 op/s » flatit
       2,498,742 op/s » lodash
          23,792 op/s » flatten

                      flatten single nested array
      53,866,643 op/s » flatit
       1,482,026 op/s » lodash
          24,002 op/s » flatten

                      flatten nested array
         735,483 op/s » flatit
         429,010 op/s » lodash
          26,407 op/s » flatten

                      flatten big array (depth 2)
           4,709 op/s » flatit
           4,422 op/s » lodash
              51 op/s » flatten
```

# License
MIT (c) 2014 Vsevolod Strukchinsky (floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/flatit
[npm-image]: http://img.shields.io/npm/v/flatit.svg

[travis-url]: https://travis-ci.org/floatdrop/flatit
[travis-image]: http://img.shields.io/travis/floatdrop/flatit.svg

[depstat-url]: https://david-dm.org/floatdrop/flatit
[depstat-image]: https://david-dm.org/floatdrop/flatit.svg?theme=shields.io
