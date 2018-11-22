const events = require('events');

const ee = new events.EventEmitter();

function createUser(user) {
  // TODO insert dans MongoDb
  process.nextTick(() => {
    ee.emit('user.created', user);
  })
}

ee.on('user.created', (user) => {
  // TODO envoi d'un SMS
  console.log('SMS sent to ' + user.phone);
})

ee.once('user.created', (user) => {
  // TODO envoi d'un email
  console.log('Mail sent to ' + user.email);
})

createUser({
  phone: '1234567',
  email: 'toto@gmail.com',
});

createUser({
  phone: '98845614',
  email: 'titi@gmail.com',
});

console.log('Fin');
