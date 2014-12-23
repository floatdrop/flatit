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
      78,780,394 op/s » flatit
      30,164,656 op/s » lodash
       2,821,689 op/s » flatten
      28,886,468 op/s » recursive

                      flatten array of empty arrays
       3,012,375 op/s » flatit
         588,371 op/s » lodash
         129,737 op/s » flatten
       2,235,853 op/s » recursive

                      flatten already flat array
       2,495,726 op/s » flatit
       2,475,523 op/s » lodash
          29,953 op/s » flatten
       1,092,921 op/s » recursive

                      flatten single nested array
      42,479,196 op/s » flatit
       1,226,766 op/s » lodash
          29,801 op/s » flatten
       1,075,470 op/s » recursive

                      flatten nested array
         838,385 op/s » flatit
         552,424 op/s » lodash
          31,275 op/s » flatten
       1,521,271 op/s » recursive

                      flatten big array (depth 2)
           4,191 op/s » flatit
           3,728 op/s » lodash
              57 op/s » flatten
           6,949 op/s » recursive
```

# License
MIT (c) 2014 Vsevolod Strukchinsky (floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/flatit
[npm-image]: http://img.shields.io/npm/v/flatit.svg

[travis-url]: https://travis-ci.org/floatdrop/flatit
[travis-image]: http://img.shields.io/travis/floatdrop/flatit.svg

[depstat-url]: https://david-dm.org/floatdrop/flatit
[depstat-image]: https://david-dm.org/floatdrop/flatit.svg?theme=shields.io
