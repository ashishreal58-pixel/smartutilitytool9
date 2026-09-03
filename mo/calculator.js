// calculator.js
// CLI-based calculator using process.argv
// Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>

const args = process.argv.slice(2);
const [operation, rawA, rawB] = args;

const num1 = parseFloat(rawA);
const num2 = parseFloat(rawB);

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
  const result = calculate(operation, num1, num2);
  console.log(`Result: ${result}`);
} catch (err) {
  console.error(`Error: ${err.message}`);
  process.exit(1);
}
