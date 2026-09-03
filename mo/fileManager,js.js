// fileManager.js
// File manager demonstrating CRUD operations using the fs module

const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'test.txt');

function createFile() {
  console.log('Creating File...');
  fs.writeFile(filePath, 'Hello Node.js\n', (err) => {
    if (err) {
      console.error('Error creating file:', err.message);
      return;
    }
    console.log('File Created');
    readFile(updateFile);
  });
}

function readFile(callback) {
  console.log('Reading File');
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error: File does not exist or cannot be read.');
      return;
    }
    console.log(data.trim());
    if (callback) callback();
  });
}

function updateFile() {
  fs.appendFile(filePath, 'Learning FS Module\n', (err) => {
    if (err) {
      console.error('Error updating file:', err.message);
      return;
    }
    console.log('File Updated');
    readFile(deleteFile);
  });
}

function deleteFile() {
  fs.unlink(filePath, (err) => {
    if (err) {
      console.error('Error: Could not delete file (it may not exist).');
      return;
    }
    console.log('File Deleted');
  });
}

// Run the full CRUD sequence: create -> read -> update -> read -> delete
createFile();
