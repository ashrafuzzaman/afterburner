import { Coordinate } from './coordinate';
import { Weapon } from './weapon';


class Plane {
  coordinate: Coordinate;
  weapons: Weapon[];
  currentWeaponIndex: number;
  movementStrategy: MovementStrategy;

  constructor({ weapons, coordinate, movementStrategy }) {
    this.coordinate = coordinate.clone();
    this.weapons = weapons;
    this.currentWeaponIndex = 0;
    this.movementStrategy = movementStrategy;
  }

  //weapon
  fireWeapon(targetCoordinate: Coordinate) {
    this.weapons[this.currentWeaponIndex].fire(this.coordinate, targetCoordinate);
  }

  chooseNextWeapon() {
    this.currentWeaponIndex = (this.currentWeaponIndex + 1) % this.weapons.length;
  }

  setMovementStrategy(movementStrategy: MovementStrategy) {
    this.movementStrategy = movementStrategy;
  }
  //movement
  moveUp() {
    this.coordinate = this.movementStrategy.moveUp(this.coordinate);
  }
  moveDown() {
    this.coordinate = this.movementStrategy.moveDown(this.coordinate);
  }
  moveLeft() {
    this.coordinate = this.movementStrategy.moveLeft(this.coordinate);
  }
  moveRight() {
    this.coordinate = this.movementStrategy.moveRight(this.coordinate);
  }
}

interface MovementStrategy {
  moveUp(coordinate: Coordinate): Coordinate;
  moveDown(coordinate: Coordinate): Coordinate;
  moveLeft(coordinate: Coordinate): Coordinate;
  moveRight(coordinate: Coordinate): Coordinate;
}

class DefaultMovementStrategy implements MovementStrategy {
  velocity: number;

  constructor(velocity) {
    this.velocity = velocity;
  }

  moveUp(coordinate: Coordinate): Coordinate {
    return new Coordinate({ x: coordinate.x, y: coordinate.y + this.velocity });
  }

  moveDown(coordinate: Coordinate): Coordinate {
    return new Coordinate({ x: coordinate.x, y: coordinate.y - this.velocity });
  }

  moveRight(coordinate: Coordinate): Coordinate {
    return new Coordinate({ x: coordinate.x + this.velocity, y: coordinate.y });
  }

  moveLeft(coordinate: Coordinate): Coordinate {
    return new Coordinate({ x: coordinate.x - this.velocity, y: coordinate.y });
  }
}


export {
  Plane,
  DefaultMovementStrategy
};
