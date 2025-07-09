class ErrorLog {
  static log(message) {
    return message;
  }
}

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.run = true;
  }

  start() {
    if (this.run) {
      return ErrorLog.log(`The Car ${this.make} ${this.model} started`);
    }
    return ErrorLog.log(`The Car ${this.make} ${this.model} failed to start`);
  }
}

const toyota = new Car("Toyota", "High-Luxe");
console.log(toyota.start());
