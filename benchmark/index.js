/* global suite, bench */

var flatit = require('..');
var lodash = require('lodash');

function run(array) {
    bench('flatit', function () {
        return flatit(array);
    });
    bench('lodash', function () {
        return lodash.flatten(array);
    });
}

suite('flatten empty array', function () {
    var array = [];

    run(array);
});


suite('flatten array of empty arrays', function () {
    var array = [[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[],[]];
    run(array);
});

suite('flatten already flat array', function () {
    var array = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];

    run(array);
});

suite('flatten single nested array', function () {
    var array = [[1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10]];

    run(array);
});

suite('flatten nested array', function () {
    var array = [1,[2,3,4],[5,6,7],[8,9,10],[2,3,4],[5,6,7],[8,9,10],[2,3,4],[5,6,7],[8,9,10]];

    run(array);
});
