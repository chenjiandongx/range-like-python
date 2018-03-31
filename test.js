const range = require('./');
const should = require('should');


describe('range', function() {
    it('range(10) => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]', function() {
        [...range(10)].should.deepEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
    });
    it('range(2, 10) => [2, 3, 4, 5, 6, 7, 8, 9]', function() {
        [...range(2, 10)].should.deepEqual([2, 3, 4, 5, 6, 7, 8, 9])
    });
    it('range(2, 10, 2) => [2, 4, 6, 8]', function() {
        [...range(2, 10, 2)].should.deepEqual([2, 4, 6, 8])
    });
    it('range(2, 0) => []', function() {
        [...range(2, 0)].should.deepEqual([])
    });
    it('range(2, 0.5) => []', function() {
        [...range(2, 0.5)].should.deepEqual([])
    });
    it('range(2, 3, 0.5) => []', function() {
        [...range(2, 3, 0.5)].should.deepEqual([])
    });
    it('range() => []', function() {
        [...range()].should.deepEqual([])
    });
    it('range(-10, -5) => [-10, -9, -8, -7, -6]', function() {
        [...range(-10, -5)].should.deepEqual([-10, -9, -8, -7, -6])
    });
});