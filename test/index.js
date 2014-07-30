/* global describe, it */

var flatit = require('..');
require('should');

describe('flatit', function () {
    it('should work on empty arrays', function () {
        flatit([]).should.eql([]);
    });

    it('should work on flat arrays', function () {
        flatit([1,2,3,4,5]).should.eql([1,2,3,4,5]);
    });

    it('should work on nested arrays', function () {
        flatit([1,[2,3,4],5]).should.eql([1,2,3,4,5]);
        flatit([[1,2,3],4,5]).should.eql([1,2,3,4,5]);
        flatit([1,2,[3,4,5]]).should.eql([1,2,3,4,5]);
        flatit([1,2,[[3],4,5]]).should.eql([1,2,3,4,5]);
        flatit([[1,2,3,4,5]]).should.eql([1,2,3,4,5]);
    });

    it('should work on array with empty arrays inside', function () {
        flatit([1,[],5]).should.eql([1,5]);
    });
});
