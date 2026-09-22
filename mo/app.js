
// app.js
// Demonstrates reusing custom modules (isEven + logger) via require()

const isEven = require('./module/isEven');
const log = require('./module/logger');


log('Starting module reusability demo...');

const numbers =;

numbers.forEach((num) => {
  const result = isEven(num) ? 'even' : 'odd';
  log(`${num} is ${result}`);
});

log('Demo finished.');
