class Ammo {
  constructor({ velocity, coordinate: currentCoordinate, targetCoordinate }) {
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
  constructor({ bulletVelocity }) {
    super();
    this.bulletVelocity = bulletVelocity;
  }

  fire(currentCoordinate, targetCoordinate) {
    console.info('Firing gun');
    return new Bullet({
      bulletVelocity: this.bulletVelocity,
      currentCoordinate,
      targetCoordinate}).fire();
  }
}

class MissileLauncher extends Weapon {
  fire(currentCoordinate, targetCoordinate) { console.info('Firing missile'); }
}

module.exports = {
  Ammo,
  Bullet,
  Missile,
  Weapon,
  Gun,
  MissileLauncher
};