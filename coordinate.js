class Coordinate {
  constructor({x, y}) {
    this.x = x || 0;
    this.y = y || 0;
  }

  clone() {
    return new Coordinate(this);
  }
}

module.exports = Coordinate;
