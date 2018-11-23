const express = require('express');
const contactRoutes = require('./routes/contact');

const app = express();

app.use('/api/contacts', contactRoutes);

module.exports = app;
