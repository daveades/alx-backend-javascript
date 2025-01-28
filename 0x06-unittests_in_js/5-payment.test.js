const sinon = require('sinon');
const { expect } = require('chai');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
  let consoleSpy;

  beforeEach(() => {
    // Create spy before each test
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(() => {
    // Restore spy after each test
    consoleSpy.restore();
  });

  it('should log 120 for inputs 100 and 20', () => {
    sendPaymentRequestToApi(100, 20);
    
    expect(consoleSpy.calledOnceWithExactly('The total is: 120')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });

  it('should log 20 for inputs 10 and 10', () => {
    sendPaymentRequestToApi(10, 10);
    
    expect(consoleSpy.calledOnceWithExactly('The total is: 20')).to.be.true;
    expect(consoleSpy.calledOnce).to.be.true;
  });
});
