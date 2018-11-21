const fs = require('fs');
const path = require('path');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(file, msg) {
  fs.appendFileSync(file, msg + '\n');
}

console.time('Done');
try {
  try {
    fs.statSync(logDir)
  }
  catch (err) {
    if (err.code === 'ENOENT') {
      fs.mkdirSync(logDir);
    }
    else {
      throw err;
    }
  }

  log(logFile, 'Ligne 1');
  log(logFile, 'Ligne 2');
  log(logFile, 'Ligne 3');
  log(logFile, 'Ligne 4');
  log(logFile, 'Ligne 5');
}
catch (err) {
  console.log(err);
}
console.timeEnd('Done');
