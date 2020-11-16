class Fairy {
  constructor(
    name,
    dust = 10,
    clothes = { dresses: ["Iris"] },
    disposition = "Good natured",
    humanWards = []
  ) {
    this._name = name;
    this._dust = dust;
    this._clothes = clothes;
    this._disposition = disposition;
    this._humanWards = humanWards
  }

  get name() {
    return this._name;
  }

  get dust() {
    return this._dust;
  }

  get clothes() {
    return this._clothes;
  }

  get disposition() {
    return this._disposition;
  }

  get humanWards() {
      return this._humanWards
  }

  receiveBelief() {
    this._dust += 1;
  }

  believe() {
    this._dust += 10;
  }

  makeDresses(arr) {
    for (let i = 0; i < arr.length; i++) {
      this._clothes.dresses.push(arr[i]);
    }
  }

  provoke() {
    this._disposition = "Vengeful";
  }

  replaceInfant(enfant) {
    if (this._disposition = "Vengeful") {
      enfant.disposition = "Malicious";
      this._humanWards.push(enfant)
      if (this._humanWards.length == 3) {
          this._disposition = "Good natured"
      }
      return enfant
    }
  }
}

module.exports = Fairy;
