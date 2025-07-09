class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.run = false;
  }

  start() {
    if (this.run) {
      return this.errorLog(`The car ${this.make} ${this.model} started`);
    }
    return this.errorLog(`The car ${this.make} ${this.model} failed to start`);
    return false;
  }

  errorLog(message) {
    return message;
  }
}

const toyota = new Car("Toyota", "High-Luxe");
console.log(toyota.start());
