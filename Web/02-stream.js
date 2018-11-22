const fs = require('fs');
const zlib = require('zlib');
const readline = require('readline');

const gzip = zlib.createGzip();

const rs = fs.createReadStream('.editorconfig');
rs.pipe(gzip).pipe(process.stdout);

// cat .editorconfig | gz | echo


const rl = readline.createInterface({
  input: rs,
});

let i = 0;
rl.on('line', (line) => {
  console.log(++i + ' ' + line);
})
