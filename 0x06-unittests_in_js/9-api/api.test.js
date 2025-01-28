const { expect } = require('chai');
const request = require('request');

describe('Index page', () => {
  const endpoint = 'http://localhost:7865';

  describe('GET /', () => {
    it('Returns the right status', (done) => {
      request(endpoint, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        done();
      });
    });

    it('Returns the right content', (done) => {
      request(endpoint, function (error, response, body) {
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });

  describe('GET /cart/:id', () => {
    it('Returns status 200 for numeric ID', (done) => {
      request(`${endpoint}/cart/12`, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });

    it('Returns status 404 for non-numeric ID', (done) => {
      request(`${endpoint}/cart/abc`, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
});