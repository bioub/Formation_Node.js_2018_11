const express = require('express');
const isAuthenticated = require('../middlewares/is-authenticated');
const Contact = require('../models/contact');

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

// 2 - Sur la requete GET /api/contacts/5bf7f05e13a37213b8940eef
// retourner en JSON le contact dont l'id est 5bf7f05e13a37213b8940eef
// 3 - Rendre 123 paramétrable
router.get('/:id', async (req, res, next) => {

  // Utiliser la méthode findById de Contact
  const contact = await Contact.findById(req.params.id);

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
