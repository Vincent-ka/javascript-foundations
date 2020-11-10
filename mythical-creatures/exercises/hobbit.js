class Hobbit {
    constructor(name, age) {
        this._name = name
        this._age = age || 0
    }

    get name() {
        return this._name
    }

    celebrateBirthday() {
        this._age += 1
    }
  }

  var vincent = new Hobbit("Vincent")

  var ailine = new Hobbit("Ailine", 0)
  
  module.exports = Hobbit;