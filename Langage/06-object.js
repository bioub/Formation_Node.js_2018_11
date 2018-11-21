// En JS on retrouve déjà des objets existants

// au niveau du langage
console.log('typeof Math', typeof Math); // object
console.log('typeof JSON', typeof JSON); // object

// dans le navigateur
console.log('typeof document', typeof document); // object
console.log('typeof window', typeof window); // object

// dans Node.js
console.log('typeof process', typeof process); // object
console.log('typeof global', typeof global); // object
console.log('typeof exports', typeof exports); // object
console.log('typeof module', typeof module); // object

// dans Node.js et le navigateur
console.log('typeof console', typeof console); // object

// l'objet JS est un dictionnaire (un système clé/valeur)

// ajouter des clés
console.log('typeof Math.sum', typeof Math.sum); // undefined
Math.sum = (a, b) => a + b;
console.log('Math.sum(1, 2)', Math.sum(1, 2)); // 3

// modifier des clés
Math.sum = (a, b) => Number(a) + Number(b);
console.log('Math.sum("1", "2")', Math.sum('1', '2')); // 3

// supprimer des clés
delete Math.sum;
console.log('typeof Math.sum', typeof Math.sum); // undefined

// Mauvaise pratique de modifier des objets qu'on pas créé (Math, console...)

// création d'un objet mono-instancié (jamais 2 pareils)
// => object literal
const myMath = {
  sum: (a, b) => a + b
};

// création d'un objet multi-instancié
// mais très simple à créer
// et SANS méthodes
// => object literal

const coords1 = {
  x: 10,
  y: 20,
  infos: () => {}, // MAUVAISE PRATIQUE
};

const coords2 = {
  x: 20,
  y: 30,
  infos: () => {}, // MAUVAISE PRATIQUE
};

console.log(
  'coords1.infos === coords2.infos',
  coords1.infos === coords2.infos,
); // false

// création d'un objet multi-instancié
// compliqué à créer
// et/ou AVEC méthodes
// => constructor function

function Contact(prenom) {
  this.prenom = prenom;
}

Contact.prototype.hello = function() {
  return 'Bonjour je suis ' + this.prenom;
};

console.log(typeof Contact); // function

const romain = new Contact('Romain');
console.log(romain.prenom);
console.log(romain.hello());
console.log(romain.hasOwnProperty('prenom')); // true
console.log(romain.hasOwnProperty('hello')); // false
