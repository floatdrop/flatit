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
    lodash: require('lodash'),
    flatten: require('flatten'),
    flatit: require('..'),
    shifting: function shifting(arr) {
        var result = [];

        while (arr.length) {
            var el = arr.shift();
            if (Array.isArray(el)) {
                arr = el.concat(arr);
            } else {
                result.push(el);
            }
        }

        return result;
    }
};
