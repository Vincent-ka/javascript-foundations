class Person {
  constructor(name, stoned = false) {
      this._name = name
      this._stoned = stoned
  }

  get name() {
      return this._name
  }

  get stoned() {
      return this._stoned
  }

}

module.exports = Person;
