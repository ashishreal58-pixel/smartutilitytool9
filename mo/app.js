
// app.js
// Demonstrates reusing custom modules (isEven + logger) via require()

const isEven = require('./modules/isEven');
const log = require('./modules/logger'); // Fixed: Import function directly without destructuring

log('Starting module reusability demo...');

const numbers =;

numbers.forEach((num) => {
  const result = isEven(num) ? 'even' : 'odd';
  log(`${num} is ${result}`);
});

log('Demo finished.');
