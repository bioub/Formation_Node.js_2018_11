const random = {
  // 1 - Method properties
  get: function () {
    return Math.random();
  },

  getArbitrary: function (min, max) {
    return Math.random() * (max - min) + min;
  },

  getInt: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },

  getIntInclusive: function (min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  },
};

const readline = require('readline');


// 2 - Class
/**
 * Nouvelle partie du Jeu
 * @constructor
 * @param {object} options Les options du jeu
 * @param {number} options.min La borne min
 * @param {number} options.max La borne max
 */
function Jeu(options /* 3 - Default params */) {
  options = options || {};

  // 4 - Object destructuring + shortand property + default value (slide 130 du pdf)
  const min = options.min || 0;
  const max = options.max !== undefined ? options.max : 100;

  this._rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });

  this._entierAlea = random.getIntInclusive(min, max);
  this._essais = [];
}

Jeu.prototype.jouer = function() {
  if (this._essais.length) {
    // 5 - Template literal
    console.log('Vous avez déjà joué ' + this._essais.join(' - '));
  }

  this._rl.question('Quel est le nombre ? ', (answer) => {

    const entierSaisi = parseInt(answer);

    if (isNaN(entierSaisi)) {
      console.log('Erreur : il faut saisir un nombre');
      return this.jouer();
    }

    this._essais.push(entierSaisi);

    if (entierSaisi < this._entierAlea) {
      console.log('Trop petit');
      return this.jouer();
    }

    if (entierSaisi > this._entierAlea) {
      console.log('Trop grand');
      return this.jouer();
    }

    console.log('Trouvé');
    this._rl.close();
  });
};


const game = new Jeu();
game.jouer();

