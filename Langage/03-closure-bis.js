function externe(msg) {
  // pour interne => portée de closure
  // si interne est appelée plus tard,
  // la portée sera sauvegardée
  function interne() {
    console.log(msg);
  }
  return interne;
}

// console.log(typeof externe); // function
// console.log(typeof interne); // undefined

const helloFct = externe('Hello');
helloFct();

// pile d'appel
// ^
// |
// |          log
// |externe - interne
// +----------------> temps

/*
function createButton(value) {
  const btn = document.createElement('button');
  btn.innerText = value;
  // value = null; // si besoin de libérer la mémoire
  btn.addEventListener('click', () => {
    console.log(value);
  });
  document.body.appendChild(btn);
}
*/


// Question ???
// Que se passe-t'il dans 0 sec ?

for (var i=0; i<3; i++) {
  setTimeout(function st() {
    console.log(i);
  }, 0);
}


// pile d'appel
// ^
// |                                             i=3 i=3 i=3
// |                                             log log log
// |for { setTimeout setTimeout setTimeout } ... st  st  st
// +---------------------------------------------0.03s--------> temps

for (var i=0; i<3; i++) {
  setTimeout(externe(i), 0);
}

// pile d'appel
// ^
// |                                             m=0 m=1 m=2
// |                                             log log log
// |for { setTimeout setTimeout setTimeout } ... st1 st2 st3
// +---------------------------------------------0.03s--------> temps
