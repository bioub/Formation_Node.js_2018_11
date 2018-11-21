global.prenom = 'Global';

const contact = {
  prenom: 'Romain',
};

function hello(p1, p2) {
  return `Bonjour ${p1}, ${p2}, je m'appelle ${this.prenom}`
}

console.log(hello('Jean', 'Eric'));
console.log(hello.call(contact, 'Jean', 'Eric'));
console.log(hello.apply(contact, ['Jean', 'Eric']));
console.log(hello.call(contact, ...['Jean', 'Eric']));

function bind(fn, applyThis) {
  return function() {
    return fn.apply(applyThis, arguments);
  };
}

const helloContact = bind(hello, contact);
console.log(helloContact('Jean', 'Eric'));

const helloEs5 = hello.bind(contact);
console.log(helloEs5('Jean', 'Eric'));
