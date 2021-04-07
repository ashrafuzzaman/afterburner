import { Plane } from "./plane";
import { Coordinate } from "./coordinate";
import { Gun, MissileLauncher } from "./weapon";


let gun = new Gun({ bulletVelocity: 10 });
let missileLauncher = new MissileLauncher();
let plane = new Plane({
  velocity: 10,
  weapons: [gun, missileLauncher],
  coordinate: new Coordinate({ x: 0, y: 0 })
});
plane.moveUp();
console.info('Current position', { x: plane.coordinate.x, y: plane.coordinate.y });
plane.chooseNextWeapon();

let enemyCoordinate = new Coordinate({ x: 100, y: 100 });
plane.fireWeapon(enemyCoordinate);
console.info('Game over');
