class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.isRunning = false;
  }

  start() {
    if (this.isRunning) {
      console.log(`${this.brand} is already running`);
    } else {
      this.isRunning = true;
      console.log("Car is started");
    }
  }
  stop() {
    if (!this.isRunning) {
      console.log(` ${this.brand} is already stopped`);
    } else {
      console.log("Car Stopped");
    }
  }
}

const car1 = new Car("Honda", "CRV", "2023");
car1.start();
