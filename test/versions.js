module.exports = {
    recursive: function flat(arr) {
        var result = [];
        function rec (arr) {
            for (var i = 0; i < arr.length; i++){
                if (Array.isArray(arr[i])) {
                    rec(arr[i]);
                } else {
                    result.push(arr[i]);
                }
            }
        }
        rec(arr);
        return result;
    },
    arrFlatten: require('arr-flatten'),
    lodash: require('lodash').flatten,
    flatten: require('flatten'),
    flatit: require('..'),
    shifting: function shifting(arr) {
        var result = [];

        while (arr.length) {
            var el = arr.shift();
            if (Array.isArray(el)) {
                arr.unshift.apply(arr, el);
            } else {
                result.push(el);
            }
        }

        return result;
    },
    pop: function parse(arr) {
        arr = arr.reverse();
        var result = [];

        while (arr.length) {
            var el = arr.pop();
            if (Array.isArray(el)) {
                arr.push.apply(arr, el.reverse());
            } else {
                result.push(el);
            }
        }

        return result;
    }
};
