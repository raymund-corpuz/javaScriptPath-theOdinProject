//The open-closed principle says that code should be open for extension, but closed for modification.

class Vehicle {
  constructor(fuelCapacity, fuelEffiency) {
    this.fuelCapacity = fuelCapacity;
    this.fuelEffiency = fuelEffiency;
  }

  getRange() {
    let range = this.fuelCapacity * this.fuelEffiency;

    if (this instanceof HybridVehicle) {
      range += this.electircRange;
    }
    return range;
  }
}

class HybridVehicle extends Vehicle {
  constructor(fuelCapacity, fuelEffiency, electircRange) {
    super(fuelCapacity, fuelEffiency);
    this.electircRange = electircRange;
  }
}

const standardVehicle = new Vehicle(10, 15);
console.log(standardVehicle.getRange());

const hybridVehicle = new HybridVehicle(10, 15, 50);
console.log(standardVehicle.getRange());
console.log(hybridVehicle.getRange());
