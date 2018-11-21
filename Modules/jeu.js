const random = require('./random'); // un fichier JS du projet (prefix ./ ou ../)
const readline = require('readline'); // un fichier JS du binaire de Node.js
const chalk = require('chalk'); // un dossier JS installé avec npm

/**
 * Nouvelle partie du Jeu
 * @constructor
 * @param {object} options Les options du jeu
 * @param {number} options.min La borne min
 * @param {number} options.max La borne max
 */
class Jeu {
  constructor(options = {}) {

    const { min = 0, max = 100 } = options;

    this._rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    this._entierAlea = random.getIntInclusive(min, max);
    this._essais = [];
  }
  jouer() {
    if (this._essais.length) {
      console.log(`Vous avez déjà joué ${this._essais.join(' - ')}...`);
    }

    this._rl.question(chalk.blue('Quel est le nombre ? '), (answer) => {
      const entierSaisi = Number.parseInt(answer);

      if (Number.isNaN(entierSaisi)) {
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
  }
}

module.exports = Jeu;
