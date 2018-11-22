/*
setTimeout(() => {
  console.log('1s');

  setTimeout(() => {
    console.log('1s');
  }, 1000);

}, 1000);
*/

/*
timeout(1000)
  .then(() => {
    console.log('1s');
    return timeout(1000);
  })
  .then(() => console.log('1s'))
*/

function timeout(delayMs) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(delayMs);
    }, delayMs);
  });
}

(async () => {
  await timeout(1000);
  console.log('1s');
  await timeout(1000);
  console.log('1s');
})();




/*
function getData() {
  return Promise.resolve([{prenom: 'A'}, {prenom: 'B'}]);
}

getData();
*/

function fakeRequest() {
  return timeout(Math.random() * 1001);
}

console.time('fin');
Promise.all([
  fakeRequest(),
  fakeRequest(),
  fakeRequest(),
  fakeRequest(),
  fakeRequest(),
])
  .then((delays) => {
    console.log(delays.join(', '));
    console.timeEnd('fin');
  })
