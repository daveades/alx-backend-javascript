const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with correct arguments', () => {
    // Create a spy for Utils.calculateNumber
    const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');
    
    // Call the function we want to test
    sendPaymentRequestToApi(100, 20);
    
    // Verify the spy was called with correct arguments
    expect(calculateNumberSpy.calledOnce).to.be.true;
    expect(calculateNumberSpy.calledWith('SUM', 100, 20)).to.be.true;
    
    // Restore the spy
    calculateNumberSpy.restore();
  });
});