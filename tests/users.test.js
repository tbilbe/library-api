const mongoose = require('mongoose');
const User = require('../src/models/user');

describe('cleanse the database for the test', () => {
  beforeEach((done) => {
    mongoose.connection.dropDatabase(() => {
      done();
    });
  });

  describe('POST /user', () => {
    it('creates a new user in the DB', done => {
      chai.request(server)
        .post('/users')
        .send({
          firstName: 'John',
          lastName: 'Roberts',
          email: 'j.robo@googlemail.com',
          password: '810810',
        })
        .end((err, res) => {
          expect(err).to.equal(null);
          expect(res.status).to.equal(201);

          User.findById(res.body._id, (error, user) => {
            expect(error).to.equal(null);
            expect(user.firstName).to.equal('John');
            expect(user.lastName).to.equal('Roberts');
            expect(user.email).to.equal('j.robo@googlemail.com');
            // expect(user.password).to.not.equal('810810');
            // expect(user.password).to.have.length(60);
            expect(res.body).not.to.have.property('password');
            // console.log('res.body:', res.body)
          });
          done();
        });
    });
  });
});