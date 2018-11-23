const express = require('express');
const isAuthenticated = require('../middlewares/is-authenticated');

const contacts = [{
  id: 123,
  name: 'John',
}, {
  id: 456,
  name: 'Jean',
}];

let prevId = 456;

const router = express.Router();

router.get('/', /* isAuthenticated, */ (req, res, next) => {
  res.json(contacts);
});

// 1 - Avec Postman, envoyer un POST /api/contacts
// avec en body
// {
//   "name": "Votre contact"
// }
// et l'ajouter au tableau en incrémentant l'id précédent (prevId)
router.post('/', express.json(),  (req, res, next) => {
  const contact = {
    id: ++prevId,
    ...req.body,
  };
  contacts.push(contact);
  res.statusCode = 201;
  res.json(contact);
});

// 2 - Sur la requete GET /api/contacts/123
// retourner en JSON le contact dont l'id est 123
// 3 - Rendre 123 paramétrable
router.get('/:id', (req, res, next) => {
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
