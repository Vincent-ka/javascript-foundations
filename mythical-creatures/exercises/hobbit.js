class Hobbit {
    constructor(name, age, adult = false, old = false, hasRing = false) {
        this._name = name
        this._age = age || 0
        this._adult = adult
        this._old = old
        this._hasRing
    }

    get name() {
        return this._name
    }

    get age() {
        return this._age
    }

    get adult() {
        return this._adult
    }

    get old() {
        return this._old
    }

    get hasRing() {
        if (this._name == "Frodo") {
            return true
        } else {
            return false
        }
    }

    celebrateBirthday() {
        this._age += 1
        if (this._age >= 33) {
            this._adult = true
        }
        if (this._age >= 101) {
            this._old = true
        }
    }
  }

  var vincent = new Hobbit("Vincent")

  var ailine = new Hobbit("Ailine", 0)
  
  module.exports = Hobbit;