/* global describe, it */

var versions = require('./versions.js');

require('should');

var bigAnswer = require('./bigAnswer.json');

for (var implementation in versions) {
    var flatten = versions[implementation];
    describe(implementation, function () {
        it('should skip empty arrays', function () {
            flatten([1,2,[],3]).should.eql([1,2,3]);
        });

        it('should flatten array of empty arrays', function () {
            flatten([[],[],[],[],[],[],[],[],[],[],[],[]]).should.eql([]);
        });

        it('should flatten empty arrays', function () {
            flatten([]).should.eql([]);
        });

        it('should flatten flat arrays', function () {
            flatten([1,2,3,4,5]).should.eql([1,2,3,4,5]);
        });

        it('should flatten nested arrays', function () {
            flatten([1,[2,3,4],5]).should.eql([1,2,3,4,5]);
            flatten([[1,2,3],4,5]).should.eql([1,2,3,4,5]);
            flatten([1,2,[3,4,5]]).should.eql([1,2,3,4,5]);
            flatten([1,2,[[3],4,5]]).should.eql([1,2,3,4,5]);
            flatten([[1,2,3,4,5]]).should.eql([1,2,3,4,5]);
        });

        it('should flatten array with empty arrays inside', function () {
            flatten([1,[],5]).should.eql([1,5]);
        });

        var bigQuestion = [];
        for (var i=0; i<100; ++i) {
            bigQuestion.push([]);
            for (var j=0; j<100; ++j) {
                bigQuestion[i].push(j);
            }
        }

        it('should flatten big nested array', function () {
            flatten(bigQuestion).should.eql(bigAnswer);
        });
    });
}
