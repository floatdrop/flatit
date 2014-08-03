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

```
                      flatten empty array
      79,013,663 op/s » flatit
      30,549,899 op/s » lodash

                      flatten array of empty arrays
       2,909,323 op/s » flatit
         565,505 op/s » lodash

                      flatten already flat array
       2,407,857 op/s » flatit
       2,544,221 op/s » lodash

                      flatten single nested array
      42,301,213 op/s » flatit
       1,291,195 op/s » lodash

                      flatten nested array
         826,186 op/s » flatit
         560,056 op/s » lodash
```

# License
MIT (c) 2014 Vsevolod Strukchinsky (floatdrop@gmail.com)

[npm-url]: https://npmjs.org/package/flatit
[npm-image]: http://img.shields.io/npm/v/flatit.svg

[travis-url]: https://travis-ci.org/floatdrop/flatit
[travis-image]: http://img.shields.io/travis/floatdrop/flatit.svg

[depstat-url]: https://david-dm.org/floatdrop/flatit
[depstat-image]: https://david-dm.org/floatdrop/flatit.svg?theme=shields.io
