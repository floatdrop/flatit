function skipNotArrays (array) {
    var index = -1;
    while (++index < array.length && !Array.isArray(array[index])) {
    }
    return index;
}

/* Lodash implementation of flatten */
module.exports = function flatten(array) {
    var index = skipNotArrays(array),
        length = array.length;

    if (index === length) { return array; }
    if (length === 1) { return array[0]; }

    var resIndex = index,
        result = array.slice(0, index);

    index --;
    while (++index < length) {
        var value = array[index];
        if (Array.isArray(value)) {
            value = flatten(value);

            var valIndex = -1,
                valLength = value.length;

            result.length += valLength;
            while (++valIndex < valLength) {
                result[resIndex++] = value[valIndex];
            }
        } else {
            result[resIndex++] = value;
        }
    }
    return result;
};
