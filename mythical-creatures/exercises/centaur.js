class Centaur {
  constructor({name, type}) {
    this._name = name
    this._type = type
  }

  get name() {
    return this._name;
  }

  get breed() {
      return this._type
  }

  shoot() {
      return "Twang!!!"
  }

  run() {
      return "Clop clop clop clop!!!"
  }

  cranky() {
      return false
  }
}

module.exports = Centaur;
