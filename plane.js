class Plane {
  constructor({ velocity, weapons, coordinate }) {
    this.coordinate = coordinate.clone();
    this.weapons = weapons;
    this.currentWeaponIndex = 0;
    this.velocity = velocity;
  }

  fireWeapon() {
    this.weapons[this.currentWeaponIndex].fire();
  }

  chooseNextWeapon() {
    this.currentWeaponIndex = (this.currentWeaponIndex + 1) % this.weapons.length;
  }

  moveUp() {
    this.coordinate.y += this.velocity;
  }
  moveDown() { }
  moveLeft() { }
  moveRight() { }
}


module.exports = Plane;
