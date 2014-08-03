/* global describe, it */

var flatit = require('..');
require('should');

describe('flatit', function () {
    it('should skip empty arrays', function () {
        flatit([1,2,[],3]).should.eql([1,2,3]);
    });

    it('should flatten array of empty arrays', function () {
        flatit([[],[],[],[],[],[],[],[],[],[],[],[]]).should.eql([]);
    });

    it('should flatten empty arrays', function () {
        flatit([]).should.eql([]);
    });

    it('should flatten flat arrays', function () {
        flatit([1,2,3,4,5]).should.eql([1,2,3,4,5]);
    });

    it('should flatten nested arrays', function () {
        flatit([1,[2,3,4],5]).should.eql([1,2,3,4,5]);
        flatit([[1,2,3],4,5]).should.eql([1,2,3,4,5]);
        flatit([1,2,[3,4,5]]).should.eql([1,2,3,4,5]);
        flatit([1,2,[[3],4,5]]).should.eql([1,2,3,4,5]);
        flatit([[1,2,3,4,5]]).should.eql([1,2,3,4,5]);
    });

    it('should flatten array with empty arrays inside', function () {
        flatit([1,[],5]).should.eql([1,5]);
    });
});
