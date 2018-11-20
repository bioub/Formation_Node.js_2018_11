const nbs = [2, 3, 4];

console.log(Array.isArray(nbs)) // true

nbs
  .filter((nb) => nb % 2 === 0)
  .map((nb) => nb ** 2)
  .forEach((nb, i) => {
    console.log(nb);
  });

console.log('fin');


// pile d'appel
// ^
// |                   log log
// |cb cb cb   cb cb   cb  cb
// |filter   - map   - forEach - log
// +-----------------------------------------------------> temps
// sortie :            4   16    Fin
