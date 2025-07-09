class Vehicle {
  constructor(fuelCapacity, fuelEfficiency) {
    this.fuelCapacity = fuelCapacity;
    this.fuelEfficiency = fuelEfficiency;
  }

  getRange() {
    return this.fuelCapacity * this.fuelEfficiency;
  }
}

class HybridVehicle extends Vehicle {
  constructor(fuelCapacity, fuelEfficiency, electricRange) {
    super(fuelCapacity, fuelEfficiency);
    this.electricRange = electricRange;
  }

  getElectic() {
    const range = this.fuelCapacity * this.fuelEfficiency + this.electricRange;
    return range;
  }
}

const standardVehicle = new Vehicle(10, 15);
console.log(standardVehicle.getRange());

const hybrid = new HybridVehicle(10, 15, 50);
console.log(hybrid.getElectic());
