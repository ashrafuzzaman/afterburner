import { Coordinate } from './coordinate';
import { Weapon } from './weapon';


class Plane {
  coordinate: Coordinate;
  weapons: Weapon[];
  currentWeaponIndex: number;
  velocity: number;

  constructor({ velocity, weapons, coordinate }) {
    this.coordinate = coordinate.clone();
    this.weapons = weapons;
    this.currentWeaponIndex = 0;
    this.velocity = velocity;
  }

  //weapon
  fireWeapon(targetCoordinate: Coordinate) {
    this.weapons[this.currentWeaponIndex].fire(this.coordinate, targetCoordinate);
  }

  chooseNextWeapon() {
    this.currentWeaponIndex = (this.currentWeaponIndex + 1) % this.weapons.length;
  }

  //movement
   moveUp() {
    this.coordinate.y += this.velocity;
  }
  moveDown() { }
  moveLeft() { }
  moveRight() { }
}

class MovementStrategy {
  moveUp() { }
  moveDown() { }
  moveLeft() { }
  moveRight() { }
}


export {
  Plane
};
