const Ogre = require("./ogre");

class Human {
  constructor(name, encounterCounter = 0, knockedOut = false) {
    this._name = name;
    this._encounterCounter = encounterCounter;
    this._knockedOut = knockedOut
  }

  get name() {
    return this._name;
  }

  get encounterCounter() {
    return this._encounterCounter;
  }

  get knockedOut() {
      return this._knockedOut
  }

  noticesOgre() {
    if (this._encounterCounter % 3 === 0) {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Human;
