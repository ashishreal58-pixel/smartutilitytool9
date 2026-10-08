const logMessage = require('./module/logger');

const args = process.argv;
const op = args[2];
const num1 = parseFloat(args[3]);
const num2 = parseFloat(args[4]);

function calculate(op, x, y) {
  switch (op) {
    case 'add':
      return x + y;
    case 'subtract':
      return x - y;
    case 'multiply':
      return x * y;
    case 'divide':
      if (y === 0) {
        throw new Error('Cannot divide by zero');
      }
      return x / y;
    default:
      throw new Error('Invalid operation: ' + op);
  }
}

if (!op || isNaN(num1) || isNaN(num2)) {
  console.log('Usage: node mo/calculator.js add 10 5');
  process.exit(1);
}

try {
  logMessage('Operation: ' + op + ', inputs: ' + num1 + ', ' + num2);
  console.log('Result: ' + calculate(op, num1, num2));
} catch (err) {
  console.log('Error: ' + err.message);
}
