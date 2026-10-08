const isEven = require('./module/iseven');
const log = require('./module/logger');

log('Starting module reusability demo...');

const numbers = [1, 2, 3, 4, 5, 10, 15];

numbers.forEach((num) => {
  const result = isEven(num) ? 'even' : 'odd';
 log(`${num} is ${result}`);``
});

log('Demo finished.');
