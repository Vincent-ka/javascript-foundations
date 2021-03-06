class Werewolf {
  constructor(name, human = true, wolf = false, hungry = false, victim = []) {
    this._name = name;
    this._human = human
    this._wolf = wolf
    this._hungry = hungry
    this._victim = victim
  }

  get name() {
    return this._name;
  }

  get human() {
      return this._human
  }

  get wolf() {
      return this._wolf
  }

  get hungry() {
      return this._hungry
  }

  transform() {
      if (this._human === true) {
        this._human = false
        this._hungry = true
      } else {
          this._human = true
          this._hungry = false
      }
      if (this._wolf === false) {
        this._wolf = true
        this._hungry = true
      } else {
          this._wolf = false
          this._hungry = false
      }
      
  }

  eat(victim) {
      if (this._hungry === true || this._human === true) {
          this._victim.push(victim)
          this.transform()
      }
  }
}

module.exports = Werewolf;
