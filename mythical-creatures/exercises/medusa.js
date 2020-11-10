class Medusa {
  constructor(name, statues = []) {
    this._name = name;
    this._statues = statues;
  }

  get name() {
    return this._name;
  }

  get statues() {
    return this._statues;
  }

  stare(victime) {
    victime._stoned = true
    if (this._statues.length < 3) {
      this._statues.push(victime)
    } else {
      this._statues[0]._stoned = false
      this._statues.shift()
      this._statues.push(victime)
    }
}

}

var vincent = new Medusa("Vincent");

var vincent = new Medusa("Ailine");

module.exports = Medusa;


