class Sphinx {
  constructor(name, riddles = [], heroesEaten = 0) {
    this._name = name;
    this._riddles = riddles;
    this._heroesEaten = heroesEaten;
  }

  get name() {
    return this._name;
  }

  get riddles() {
    return this._riddles;
  }

  get heroesEaten() {
    return this._heroesEaten;
  }

  collectRiddle(riddle) {
    if (this._riddles.length > 2) {
      this._riddles.shift();
      this.riddles.push(riddle);
    } else {
      this.riddles.push(riddle);
    }
  }

  attemptAnswer(answer) {
    let count = this._riddles.length;
    for (let i = 0; i < this._riddles.length; i++) {
      if (this._riddles[i].answer === answer) {
        this._riddles.splice(i, 1);
        count -= 1;
        if (count == 0) {
          return 'PSSSSSSS THIS HAS NEVER HAPPENED, HOW DID YOU KNOW THE ANSWER WAS ' + '"' + answer +'"' + '???';
        }
        return "That wasn't that hard, I bet you don't get the next one";
      }
    }
    if (count == this._riddles.length) {
      this._heroesEaten += 1;
    }
  }
}

module.exports = Sphinx;
