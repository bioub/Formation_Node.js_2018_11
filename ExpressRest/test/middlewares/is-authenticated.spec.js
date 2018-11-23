const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);
const isAuthenticated = require('../../middlewares/is-authenticated');

describe('isAuthenticated function', () => {

  it('should call next', () => {
    const fakeReq = {
      headers: {
        authorization: 'Basic dG90bzp0aXRp'
      }
    }
    const spy = sinon.spy();
    isAuthenticated(fakeReq, {}, spy);

    expect(spy).to.have.been.callCount(1);
  });

  it('should should res.json', () => {

  });

});
