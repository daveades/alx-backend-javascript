const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should round first number correctly', () => {
        assert.strictEqual(calculateNumber(1.4, 0), 1);
        assert.strictEqual(calculateNumber(1.6, 0), 2);
        assert.strictEqual(calculateNumber(1.5, 0), 2);
    });

    it('should round second number correctly', () => {
        assert.strictEqual(calculateNumber(0, 1.4), 1);
        assert.strictEqual(calculateNumber(0, 1.6), 2);
        assert.strictEqual(calculateNumber(0, 1.5), 2);
    });
});