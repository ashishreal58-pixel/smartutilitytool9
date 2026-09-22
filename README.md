
SMART UTILITY TOOLKIT

Smart Utility Toolkit

Course: Web Dev III (Node.js & Express Backend)
Assignment: Lab Assignment 1

The Smart Utility Toolkit is a hands-on backend development lab designed to demonstrate the fundamentals of Node.js core modules. It includes multiple mini utilities built using built-in modules like process, http, fs, and crypto, without relying on any external packages or frameworks.
🚀 Features & Utilities
1. CLI-Based Calculator (calculator.js)

A command-line interface calculator that takes arguments via process.argv and performs basic arithmetic operations.

    Operations supported: add, sub, mul, div
    Usage:

    node calculator.js add 10 5

2. Custom Module Creation (app.js & modules/isEven.js)

Demonstrates modular programming by exporting functionality from a custom module (isEven.js) and importing it into another file (app.js) using module.exports and require().

    Usage:

    node app.js

3. Basic HTTP Server (server.js)

A simple HTTP server built using the native http module. It features basic routing to handle different endpoints.

    Routes: /, /about, /contact, and a fallback 404 Error page for invalid routes.
    Usage:

    node server.js

    The server runs on http://localhost:3000.

4. File Manager (filemanager.js)

Implements file system CRUD (Create, Read, Update, Delete) operations using the native fs module methods (writeFile, readFile, appendFile, and unlink). It demonstrates asynchronous file handling, execution flow, and error management.

    Usage:

    node filemanager.js

5. Random Dice Generator (dice.js)

Uses the crypto module (crypto.randomInt) to securely simulate rolling a 6-sided dice multiple times using a loop.

    Usage:

    node dice.js

🛠️ Technology Stack

    Node.js (JavaScript runtime environment)
    JavaScript (ES6)
    Node.js Core Modules: process, http, fs, crypto

📝 Prerequisites

    Node.js must be installed on your system. No external npm packages are required.

⚙️ Setup

    Open your terminal and navigate to this project directory.
    Run any of the utility files using the node command as shown in the features section above.
