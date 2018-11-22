const fs = require('fs-extra');
const path = require('path');

const logDir = path.resolve(__dirname, 'logs');
const logFile = path.resolve(logDir, 'app.log');

function log(file, msg) {
  return fs.appendFile(file, msg + '\n');
}

async function main() {
  console.time('Done');
  try {
    try {
      await fs.stat(logDir)
    }
    catch (err) {
      if (err.code === 'ENOENT') {
        await fs.mkdir(logDir);
      }
      else {
        throw err;
      }
    }

    await log(logFile, 'Ligne 1');
    await log(logFile, 'Ligne 2');
    await log(logFile, 'Ligne 3');
    await log(logFile, 'Ligne 4');
    await log(logFile, 'Ligne 5');
  }
  catch (err) {
    console.log(err);
  }
  console.timeEnd('Done');
}

main();
