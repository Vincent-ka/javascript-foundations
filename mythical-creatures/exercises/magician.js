class Unicorn {
    constructor({name, topHat = true, confident = false, count}) {
        this._name = name
        this._topHat = topHat 
        this._confident = confident
        this._count = 0
    }

    get name() {
        return this._name
    }

    get topHat() {
        return this._topHat
    }

    get confident() {
        return this._confident
    }

    incantation(text) {
        return text.toUpperCase() + "!"
    }

    cast() {
        this._count += 1
        if (this._count >=3) {
            this._confident = true
        }
        if (this._topHat === true) {
            return 'PULL RABBIT FROM TOP HAT'
        } else {
            return 'PULL DOVE FROM SLEEVE'
        }
    }

    performShowStopper() {
        if (this._count < 3) {
            return 'Oh no! Practice more before attempting this trick!'
        } else {
            return 'WOW! The magician totally just sawed that person in half!'
        }
    }
  }
  
  module.exports = Unicorn;
  