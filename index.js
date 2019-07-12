const mongoose = require('mongoose');
const app = require('./src/app');

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true
}, (err) => {
  if (err) {
    return console.log(`Hey we got an error dummy! ${err}`);
  }
  const PORT = process.env.PORT || 3998;
  app.listen(PORT, () => {
    console.log('You got connected to your DB and your app is up and running on 3998');
  });
});