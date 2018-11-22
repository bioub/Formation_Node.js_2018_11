const http = require('http');
const https = require('https');

const app = require('./app');

const httpServer = http.createServer(app);

httpServer.on('error', (err) => {
  // TODO winston / debug / log4js
  console.log(err);
});

/*
const httpsServer = https.createServer({
  cert: 'chemin-vers-cert-ssl',
}, app);
*/

httpServer.listen(process.env.PORT || 8080);
//httpsServer.listen(process.env.HTTPS_PORT || 4444);