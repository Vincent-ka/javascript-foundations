class Direwolf {
  constructor(
    name,
    home = "Beyond the Wall",
    size = "Massive",
    starksToProtect = [],
    huntsWhiteWalkers = true
  ) {
    this._name = name;
    this._home = home;
    this._size = size;
    this._starksToProtect = starksToProtect;
    this._huntsWhiteWalkers = huntsWhiteWalkers
  }

  get name() {
    return this._name;
  }

  get home() {
    return this._home;
  }

  get size() {
    return this._size;
  }

  get starksToProtect() {
    return this._starksToProtect;
  }

  get huntsWhiteWalkers() {
      return this._huntsWhiteWalkers
  }

  protect(stark) {
    if (this._home === stark.location  && this._starksToProtect.length < 2) {
      this._starksToProtect.push(stark);
      stark.safeChange()
      this._huntsWhiteWalkers = false
    }
  }

  leave(stark) {
    for (var i = this._starksToProtect.length; i--;)
    {
     if (this._starksToProtect[i] === stark) {this._starksToProtect.splice(i, 1);}
    }
    stark.safeChange()
  }
}

module.exports = Direwolf;
