// app.js
// Demonstrates reusing custom modules (isEven + logger) via require()

const isEven = require('./modules/isEven');
const { log } = require('./modules/logger');

log('Starting module reusability demo...');

const numbers = [4, 7, 10, 15, 22, 33];

numbers.forEach((num) => {
  const result = isEven(num) ? 'even' : 'odd';
  log(`${num} is ${result}`);
});

log('Demo finished.');
