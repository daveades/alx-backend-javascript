const assert = require('assert');
const calculateNumber = require('./0-calcul.js');

describe('calculateNumber', function() {
    it('should return 4 when inputs are 1 and 3', function() {
        assert.strictEqual(calculateNumber(1, 3), 4);
    });

    it('should return 5 when inputs are 1 and 3.7', function() {
        assert.strictEqual(calculateNumber(1, 3.7), 5);
    });

    it('should return 5 when inputs are 1.2 and 3.7', function() {
        assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });

    it('should handle large numbers', function() {
        assert.strictEqual(calculateNumber(10000.3, 10000.3), 20000);
    });

    it('should handle zero values', function() {
        assert.strictEqual(calculateNumber(0, 0), 0);
    });

    it('should handle numbers very close to 0.5', function() {
        assert.strictEqual(calculateNumber(2.499999, 3.499999), 5);
    });

    it('should handle decimal numbers that round in opposite directions', function() {
        assert.strictEqual(calculateNumber(2.4, 2.6), 5);
    });

    it('should handle negative decimal numbers', function() {
        assert.strictEqual(calculateNumber(-2.5, -2.5), -4);
    });

    it('should handle mixed positive and negative numbers', function() {
        assert.strictEqual(calculateNumber(-2.5, 2.5), 0);
    });

    it('should handle very small decimal numbers', function() {
        assert.strictEqual(calculateNumber(0.0001, 0.0001), 0);
    });
});

    it('should return 6 when inputs are 1.5 and 3.7', function() {
        assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });

    it('should return 0 when inputs are 0.1 and 0.3', function() {
        assert.strictEqual(calculateNumber(0.1, 0.3), 0);
    });

    it('should return -2 when inputs are -1.4 and -0.5', function() {
        assert.strictEqual(calculateNumber(-1.4, -0.5), -2);
    });

    it('should return 5 when inputs are 1.4 and 3.7', function() {
        assert.strictEqual(calculateNumber(1.4, 3.7), 5);
    });

    it('should return 6 when inputs are 1.6 and 3.7', function() {
        assert.strictEqual(calculateNumber(1.6, 3.7), 6);
    });

    it('should return 7 when inputs are 1.6 and 5.4', function() {
        assert.strictEqual(calculateNumber(1.6, 5.4), 7);
    });
});