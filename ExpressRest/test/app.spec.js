const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const sinonChai = require('sinon-chai');
chai.use(sinonChai);

const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const Contact = require('../models/contact');
const app = require('../app');

describe('functionnal tests', () => {

  describe('GET /api/contacts', () => {

    beforeEach(() => {
      // TODO mongoimport test.json
    })




    it('should return 3 contacts and have status 200', async () => {

      const mockContact = sinon.mock(Contact);

      mockContact.expects('find')
        .resolves([{name: 'A'}, {name: 'B'}])
        .once();

      const res = await chai.request(app)
        .get('/api/contacts');

        expect(res.body.length).to.be.equals(2);
        expect(res.status).to.be.equals(200);
        mockContact.verify();


    });

  })



});
