class ParkingSystem {
  private p: number[] = [];

  constructor(big: number, medium: number, small: number) {
    this.p[1] = big;
    this.p[2] = medium;
    this.p[3] = small;
  }

  addCar(carType: number): boolean {
    if (this.p[carType] !== undefined && this.p[carType] > 0) {
      this.p[carType] -= 1;
      return true;
    }
    return false;
  }
}

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */
