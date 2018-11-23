const express = require('express');
const isAuthenticated = require('../middlewares/is-authenticated');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test');

const Contact = mongoose.model('Contact', { name: String });

const contacts = [{
  id: 123,
  name: 'John',
}, {
  id: 456,
  name: 'Jean',
}];

let prevId = 456;

const router = express.Router();

router.get('/', /* isAuthenticated, */ async (req, res, next) => {
  const contacts = await Contact.find();
  res.json(contacts);
});

// 1 - Avec Postman, envoyer un POST /api/contacts
// avec en body
// {
//   "name": "Votre contact"
// }
// et l'ajouter au tableau en incrémentant l'id précédent (prevId)
router.post('/', express.json(), async (req, res, next) => {
  const contact = await Contact.create(req.body);
  res.statusCode = 201;
  res.json(contact);
});

// 2 - Sur la requete GET /api/contacts/123
// retourner en JSON le contact dont l'id est 123
// 3 - Rendre 123 paramétrable
router.get('/:id', (req, res, next) => {

  // Utiliser la méthode findById de Contact

  const contact = contacts.find((c) => c.id === Number(req.params.id));

  if (!contact) {
    res.statusCode = 404;
    return res.json({
      msg: 'Contact Not Found',
    });
  }

  res.json(contact);
});


// optionnel : update et delete de contact

module.exports = router;
