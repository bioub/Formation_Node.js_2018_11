const fs = require('fs-extra');
const path = require('path');
const del = require('del');
const md5 = require('md5');
const UglifyJS = require('uglify-es');

const distPath = path.resolve(__dirname, 'dist');
const srcPath = path.resolve(__dirname, 'src');
const horlogeJsPath = path.resolve(srcPath, 'js', 'horloge.js');
const indexJsPath = path.resolve(srcPath, 'js', 'index.js');
const indexHtmlPath = path.resolve(srcPath, 'index.html');
const indexHtmlDistPath = path.resolve(distPath, 'index.html');
const appJsDistPath = path.resolve(distPath, 'app.js');

async function rmAndCreateDir(dir) {
  await fs.remove(dir);
  await fs.mkdir(dir);
}

async function buildJs(dir) {
  const datas = await Promise.all([
    fs.readFile(horlogeJsPath),
    fs.readFile(indexJsPath),
  ]);

  for (const data of datas) {
    await fs.appendFile(appJsDistPath, data);
  }

  console.log('js built');
}

async function buildHtml(dir) {
  let data = await fs.readFile(indexHtmlPath);
  let content = data.toString();

  content = content.replace('<script src="./js/horloge.js"></script>', '');
  content = content.replace(
    '<script src="./js/index.js"></script>',
    '<script src="./app.js"></script>',
  );

  await fs.writeFile(indexHtmlDistPath, content);
  console.log('html built');
}

(async () => {
  console.time('build done');
  await rmAndCreateDir(distPath);
  console.log('dist created');

  await Promise.all([
    buildJs(),
    buildHtml(),
  ]);
  console.timeEnd('build done');
})().catch((err) => console.log(err));
