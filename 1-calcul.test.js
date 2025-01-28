const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
    describe('SUM operation', () => {
        it('should add rounded numbers correctly', () => {
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
            assert.strictEqual(calculateNumber('SUM', 1.4, 4.4), 5);
            assert.strictEqual(calculateNumber('SUM', 1.6, 4.6), 7);
            assert.strictEqual(calculateNumber('SUM', 0, 0), 0);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should subtract rounded numbers correctly', () => {
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
            assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.4), -3);
            assert.strictEqual(calculateNumber('SUBTRACT', 1.6, 4.6), -3);
            assert.strictEqual(calculateNumber('SUBTRACT', 5.0, 2.0), 3);
        });
    });

    describe('DIVIDE operation', () => {
        it('should divide rounded numbers correctly', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.4), 0.25);
            assert.strictEqual(calculateNumber('DIVIDE', 8.6, 2.0), 4.5);
        });

        it('should return "Error" when dividing by zero', () => {
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
            assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0.4), 'Error');
        });
    });
});