const mongoose = require('mongoose');
const app = require('./src/app');

mongoose.connect(process.env.DATABASE_URL, {}, (err) => {
  if (err) {
    return console.log(`Hey we got an error dummy! ${err}`);
  }
  app.listen(3998, () => {
    console.log('You got connected to your DB and your app is up and running on 3998');
  });
});