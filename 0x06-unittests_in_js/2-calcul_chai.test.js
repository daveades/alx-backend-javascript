const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
    describe('SUM operation', () => {
        it('should add rounded numbers correctly', () => {
            expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
            expect(calculateNumber('SUM', 1.4, 4.4)).to.equal(5);
            expect(calculateNumber('SUM', 1.6, 4.6)).to.equal(7);
            expect(calculateNumber('SUM', 0, 0)).to.equal(0);
        });
    });

    describe('SUBTRACT operation', () => {
        it('should subtract rounded numbers correctly', () => {
            expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
            expect(calculateNumber('SUBTRACT', 1.4, 4.4)).to.equal(-3);
            expect(calculateNumber('SUBTRACT', 1.6, 4.6)).to.equal(-3);
            expect(calculateNumber('SUBTRACT', 5.0, 2.0)).to.equal(3);
        });
    });

    describe('DIVIDE operation', () => {
        it('should divide rounded numbers correctly', () => {
            expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
            expect(calculateNumber('DIVIDE', 1.4, 4.4)).to.equal(0.25);
            expect(calculateNumber('DIVIDE', 8.6, 2.0)).to.equal(4.5);
        });

        it('should return "Error" when dividing by zero', () => {
            expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
            expect(calculateNumber('DIVIDE', 1.4, 0.4)).to.equal('Error');
        });
    });
});