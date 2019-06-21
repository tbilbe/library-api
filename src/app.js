const express = require('express');

const app = express();

app.listen(3998, () => {
  console.log('Hello you have woken the beast!');
});

module.exports = app;
