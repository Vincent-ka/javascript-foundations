class Unicorn {
    constructor(name, job, cursed, booty = 0) {
        this._name = name
        this._job = job || "scallywag"
        this._cursed = cursed || false
        this._booty = booty
    }

    get name() {
        return this._name
    }

    get job() {
        return this._job
    }

    get cursed() {
        return this._cursed
    }

    get booty() {
        return this._booty
    }

    robShip() {
        this._booty += 100
        return "YAARRR!"
    }
  }
  
  module.exports = Unicorn;
  