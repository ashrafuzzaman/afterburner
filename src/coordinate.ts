class Coordinate {
  x: number;
  y: number;

  constructor({x, y}) {
    this.x = x || 0;
    this.y = y || 0;
  }

  clone() {
    return new Coordinate(this);
  }
}

export {
  Coordinate
};
