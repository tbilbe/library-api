const mongoose = require('mongoose');
const User = require('../src/models/user');

describe('cleanse the database for the test', () => {
  beforeEach((done) => {
    mongoose.connection.dropDatabase();
    done();
  });
});

describe('POST /user', () => {
  it('creates a new user in the DB', (done) => {
    chai.request(server)
      .post('/user')
      .send({
        firstName: 'John',
        lastName: 'Roberts',
        email: 'j.robo@googlemail.com',
        password: '810810'
      })
      .end((err, res) => {
        expect(err).to.equal(null);
        expect(res.status).to.equal(201);
      });

    User.findById(res.body._id, (err, user) => {
      expect(err).to.equal(null);
      expect(user.firstName).to.equal('John');
      expect(user.lastName).to.equal('Roberts');
      expect(user.email).to.equal('j.robo@googlemail.com');
      done();
    });
  });
});