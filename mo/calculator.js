// calculator.js
// CLI-based calculator using process.argv
// Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>

const logMessage = require('./modules/logger'); // Reuses your custom logger module
const isEven = require('./modules/isEven');     // Reuses your custom isEven module

const args = process.argv.slice(2);
const [rawOperation, rawA, rawB] = args;

// Normalize input operation to lowercase to prevent case-sensitive crashes
const operation = rawOperation ? rawOperation.toLowerCase() : undefined;

const num1 = parseFloat(rawA);
const num2 = parseFloat(rawB);

function calculate(op, x, y) {
  switch (op) {
    case 'add':
      return x + y;
    case 'subtract':
    case 'sub': // Added 'sub' shortcut for convenience
      return x - y;
    case 'multiply':
      return x * y;
    case 'divide':
      if (y === 0) {
        throw new Error('Division by zero is not allowed');
      }
      return x / y;
    default:
      throw new Error(`Invalid operation: "${op}". Use add, subtract, multiply, or divide.`);
  }
}

if (!operation || Number.isNaN(num1) || Number.isNaN(num2)) {
  console.log('Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>');
  console.log('Example: node calculator.js add 10 5');
  process.exit(1);
}

try {
  logMessage(`Attempting calculation: ${operation} with values ${num1} and ${num2}`);
  const result = calculate(operation, num1, num2);
  
  // Print result along with an even/odd check to use your custom module
  console.log(`Result: ${result} (Is even? ${isEven(result)})`);
} catch (err) {
  logMessage(`Failure: ${err.message}`);
  console.error(`Error: ${err.message}`);
  process.exit(1);

  
}
