const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
    it('should round first number correctly', () => {
        assert.strictEqual(calculateNumber(1.4, 0), 1);
        assert.strictEqual(calculateNumber(1.6, 0), 2);
        assert.strictEqual(calculateNumber(1.5, 0), 2);
    });
});