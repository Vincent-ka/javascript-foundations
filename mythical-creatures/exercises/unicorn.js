class Unicorn {
  constructor(name, color = "white") {
    this._name = name;
    this._color = color
  }

  get name() {
    return this._name
  }

  get color() {
    return this._color
  }

  isWhite() {
    return this._color === "white"
  }

  says(text) {
    return `**;* ${text} *;**`
  }
}

module.exports = Unicorn;
