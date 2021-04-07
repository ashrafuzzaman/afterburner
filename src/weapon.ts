import { Coordinate } from "./coordinate";

class Ammo {
  currentCoordinate: Coordinate;
  targetCoordinate: Coordinate;
  velocity: number;

  constructor({ velocity, currentCoordinate: currentCoordinate, targetCoordinate }) {
    this.currentCoordinate = currentCoordinate.clone();
    this.targetCoordinate = targetCoordinate.clone();
    this.velocity = velocity;
  }

  fire() {}
}

class Bullet extends Ammo {
  fire() {
    console.info('Firing a bullet');
    return this;
  }
}

class Missile extends Ammo {
}

class Weapon {
  fire(currentCoordinate, targetCoordinate) {}
}

class Gun extends Weapon {
  bulletVelocity: number;

  constructor({ bulletVelocity }) {
    super();
    this.bulletVelocity = bulletVelocity;
  }

  fire(currentCoordinate, targetCoordinate) {
    console.info('Firing gun');
    return new Bullet({
      velocity: this.bulletVelocity,
      currentCoordinate,
      targetCoordinate}).fire();
  }
}

class MissileLauncher extends Weapon {
  fire(currentCoordinate, targetCoordinate) { console.info('Firing missile'); }
}

export {
  Ammo,
  Bullet,
  Missile,
  Weapon,
  Gun,
  MissileLauncher
};