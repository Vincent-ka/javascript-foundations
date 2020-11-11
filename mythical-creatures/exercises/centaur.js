class Centaur {
  constructor({ name, type, cranky = false, standing = true, count = 0, layingDown = false }) {
    this._name = name;
    this._type = type;
    this._cranky = cranky;
    this._standing = standing;
    this._count = count
    this._layingDown = layingDown
  }

  get name() {
    return this._name;
  }

  get breed() {
    return this._type;
  }

  get cranky() {
    return this._cranky;
  }

  get standing() {
    return this._standing
  }

  get layingDown() {
    return this._layingDown
  }

  shoot() {
    if (this.layingDown === true) {
      return "NO!"
    }
    if (this._cranky === false) {
      this._count += 1
    if (this._count >=3) {
      this._cranky = true
    }
    return "Twang!!!";
    } else {
      return "NO!"
    }
  }

  run() {
    if (this.layingDown === true) {
      return "NO!"
    }
    if (this._cranky === false) {
      this._count += 1
    if (this._count >=3) {
      this._cranky = true
    }
    return "Clop clop clop clop!!!";
    } else {
      return "NO!"
    }
  }

  sleep() {
    if (this.layingDown === true) {
      this._cranky = false
      return "ZZZZ"
    }
    if (this._standing === true) {
      return "NO!"
    }
  }

  layDown() {
    this._standing = false;
    this._layingDown = true
  }

  standUp() {
    this._standing = true;
    this._layingDown = false
  }

  drinkPotion() {
    if (this._layingDown === true) {
      return 'Not while I\'m laying down!'
    } else {
      this._cranky = true
    }
    if (this._count >= 3) {
      this._cranky = false
    }
    
  }
}

module.exports = Centaur;
