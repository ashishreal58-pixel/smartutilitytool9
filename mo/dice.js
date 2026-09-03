// dice.js
// Random dice generator using the crypto module for secure randomness

const crypto = require('crypto');

function rollDice() {
  // crypto.randomInt(min, max) -> min inclusive, max exclusive
  return crypto.randomInt(1, 7);
}

const numberOfRolls = 5;

console.log(`Rolling the dice ${numberOfRolls} times...\n`);

for (let i = 1; i <= numberOfRolls; i++) {
  console.log(`Roll ${i} -> Dice Rolled: ${rollDice()}`);
}
