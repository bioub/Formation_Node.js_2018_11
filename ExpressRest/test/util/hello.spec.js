const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const hello = require('../../util/hello');

describe('hello function', () => {

  it('should return hello Romain', () => {
    expect(hello('Romain')).to.be.equals('Hello Romain');
    //assert.strictEqual(hello('Romain'), 'Hello Romain');
  });

});
