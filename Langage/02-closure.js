function externe(msg) {
  // pour interne => portée de closure
  function interne() {
    console.log(msg);
  }
  interne();
}

// console.log(typeof externe); // function
// console.log(typeof interne); // undefined

externe('Hello');

// pile d'appel
// ^
// |log
// |interne
// |externe
// +----------------> temps
