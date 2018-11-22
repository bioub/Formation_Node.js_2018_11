const express = require('express');

const contacts = [{
  id: 123,
  name: 'John',
}, {
  id: 456,
  name: 'Jean',
}];

const prevId = 456;

const router = express.Router();

router.get('/', (req, res, next) => {
  res.json(contacts);
});

// 1 - Avec Postman, envoyer un POST /api/contacts
// avec en body 
// {
//   "name": "Votre contact" 
// }
// et l'ajouter au tableau en incrémentant l'id précédent (prevId)
router.post('/', express.json(), (req, res, next) => {
  console.log(req.body);
  // TODO
});

// 2 - Sur la requete GET /api/contacts/123
// retourner en JSON le contact dont l'id est 123

// 3 - Rendre 123 paramétrable

// optionnel : update et delete de contact

module.exports = router;