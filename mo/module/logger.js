// modules/logger.js
// Custom logging module with timestamps

// module/logger.js
// Custom logging module with timestamps

function log(message) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${message}`);
}

module.exports = log; // Fixed: Exporting function directly to match server.js and calculator.js
