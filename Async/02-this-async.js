function ContactES3(prenom) {
  this.prenom = prenom;
}

ContactES3.prototype.helloSync = function() {
  console.log(`ES3 Bonjour je m'appelle ${this.prenom}`);
};

ContactES3.prototype.helloASync = function() {
  var that = this;
  setTimeout(function() {
    console.log(`ES3 Bonjour je m'appelle ${that.prenom}`);
  }, 100);
};

var ctcEs3 = new ContactES3('Romain');
ctcEs3.helloSync();
ctcEs3.helloASync();

function ContactES5(prenom) {
  this.prenom = prenom;
}

ContactES5.prototype.helloSync = function() {
  console.log(`ES5 Bonjour je m'appelle ${this.prenom}`);
};

ContactES5.prototype.helloASync = function() {
  setTimeout(function() {
    console.log(`ES5 Bonjour je m'appelle ${this.prenom}`);
  }.bind(this), 100);
};

ContactES5.prototype.helloASyncViaHelloSync = function() {
  setTimeout(this.helloSync.bind(this), 100);
};

var ctcEs5 = new ContactES5('Romain');
ctcEs5.helloSync();
ctcEs5.helloASync();
ctcEs5.helloASyncViaHelloSync();


class ContactES6 {
  constructor(prenom) {
    this.prenom = prenom;
  }
  helloSync() {
    console.log(`ES6 Bonjour je m'appelle ${this.prenom}`);
  }
  helloASync() {
    setTimeout(() => {
      console.log(`ES6 Bonjour je m'appelle ${this.prenom}`);
    }, 100);
  }
  helloASyncViaHelloSync() {
    setTimeout(this.helloSync.bind(this), 100);
  }
}




const ctcEs6 = new ContactES6('Romain');
ctcEs6.helloSync();
ctcEs6.helloASync();
ctcEs6.helloASyncViaHelloSync();

