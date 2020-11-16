class Ogre {
    constructor(name, home = 'Swamp', swings = 0) {
      this._name = name;
      this._home = home
      this._swings = swings
    }

    get name() {
        return this._name
    }

    get home() {
        return this._home
    }

    get swings() {
        return this._swings
    }

    encounter(human) {
        human._encounterCounter += 1
        if (human._encounterCounter % 3 === 0) {
            this._swings += 1
            human._knockedOut = true
        }
    }

    swingAt(human) {
        this._swings += 1
    }

    apologize(human) {
        human._knockedOut = false
    }
  }
  
  module.exports = Ogre;