// test/routes.test.js
const request = require('supertest');
const express = require('express');
const app = require('../server'); // Import your Express app
const chai = require('chai');
const expect = chai.expect;

describe('GET /', () => {
  it('Index page tested successfully', (done) => {
    request(app)
      .get('/')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('<title>SIT725- Task4.2P (Add a database)</title>');
        expect(res.text).to.include('<h1>PARK YOUR VEHICLE</h1>');
        done();
      });
  });
});

describe('GET /signup', () => {
  it('Sign Up page tested successfully', (done) => {
    request(app)
      .get('/signup')
      .expect(200)
      .end((err, res) => {
        if (err) return done(err);
        expect(res.text).to.include('<title>Registration Successful</title>');
        expect(res.text).to.include('<h1>Congratulations!</h1>');
        done();
      });
  });
});

