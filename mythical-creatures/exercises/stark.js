class Stark {
    constructor(name, location = "Winterfell", safe = false) {
        this._name = name
        this._location = location
        this._safe = safe
    }

    get name() {
        return this._name
    }

    get location() {
        return this._location
    }

    get safe() {
        return this._safe
    }

    safeChange() {
        if (this._safe === false) {
            this._safe = true
        } else {
            this._safe = false
        }
    }

    houseWords() {
        if (this._safe === false) {
            return 'Winter is Coming'
        } else {
            return 'The North Remembers'
        }
    }
  }
  
  module.exports = Stark;