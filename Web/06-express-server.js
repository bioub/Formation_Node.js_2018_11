const express = require('express');

const app = express();

app.use((req, res, next) => {
  console.log(req.url + ' ' + req.method);
  next();
});

// toutes les méthodes HTTP sur /
app.all('/', (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-type', 'text/html');
  res.end('<h2>Hello</h2>');
});

// La méthode HTTP GET sur /contact
app.get('/contact', (req, res) => {
  res.send('<h2>Contact</h2>');
});

app.get('/gotogoogle', (req, res) => {
  /*
  res.statusCode = 301;
  res.setHeader('Location', 'http://www.google.fr/');
  res.send();
  */
  res.redirect('http://www.google.fr/');
})

app.get('/api/contact/:contactId', (req, res) => {
  res.json({
    id: req.params.contactId,
    prenom: 'Toto',
  });
})


app.listen(8080, () => {
  console.log('Server started localhost:8080');
});
