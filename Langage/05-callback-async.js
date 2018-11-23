setTimeout(() => {
  console.log('A');
}, 500);

setTimeout(() => {
  console.log('B');
}, 1000);

setTimeout(() => {
  console.log('C');
}, 0);

setTimeout(() => {
  console.log('D');
}, 500);

/*
setTimeout(() => {
  console.log('E')
}, Math.random() * 1000);

setTimeout(() => {
  console.log('F')
}, Math.random() * 1000);
*/

console.log('Fin');

// pile d'appel
// ^
// |
// |                             log      log log      log
// |st - st - st - st - log .... cbC .... cbA cbD .... cbB

// +-----------------------------2--------501-502------1001-------------> temps
// sortie :             Fin      C        A   D        B

// file d'attente (0ms) : cbC
// file d'attente (2ms) :
// file d'attente (500ms) : cbA cbD
// file d'attente (501ms) : cbD
// file d'attente (502ms) :
// file d'attente (1000ms) : cbB
// file d'attente (1001ms) :
