const { expect } = require('chai');
const nihClient = require('../src/index');

describe('Nih client', () => {
  it('should fetch data from the api', done => {
    nihClient
      .get({
        resourceName: 'Calcium',
        readingLevel: 'Health Professional',
      })
      .then(response => {
        expect(response.data).to.include('<Title>Calcium</Title>');
        done();
      })
      .catch(err => {
        done(err);
      });
  });
});
