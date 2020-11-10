class Dragon {
    constructor(name, rider, color, hungry, count) {
        this._name = name
        this._rider = rider
        this._color = color
        this._hungry = true
        this._count = 0
    }

    get name() {
        return this._name
    }

    get rider() {
        return this._rider
    }

    get color() {
        return this._color
    }

    get hungry() {
        return this._hungry
    }

    eat() {
        this._count += 1
        if (this._count >= 3 ) {
            this._hungry = false
        }
    }
  }
  
  module.exports = Dragon;