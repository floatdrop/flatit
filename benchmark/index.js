/* global suite, bench */

var versions = require('../test/versions.js');

function run(array) {
    bench('flatit', function () {
        return flatit(array);
    });

    bench('lodash', function () {
        return lodash.flatten(array);
    });

    bench('flatten', function () {
        return flatten(array);
    });



    bench('recursive', function () {
        return flat(array);
    });

    bench('shifting', function () {
        return shifting(array);
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

var data = [];
for (var i=0; i<100; ++i) {
    data.push([]);
    for (var j=0; j<100; ++j) {
        data[i].push(j);
    }
}

suite('flatten big array (depth 2)', function () {
    run(data);
});
