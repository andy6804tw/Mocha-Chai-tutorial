const assert = require('chai').assert;
const expect = require('chai').expect;
const supertest = require('supertest');
const api = supertest('http://localhost:3000');

const app = require('../app');


describe('User', function () {
  it('should return a 200 response', function (done) {
    api.get('/')
      .set('Accept', 'application/json')
      .expect(200, done);
  })
})
