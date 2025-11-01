class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  displayInfo() {
    console.log(
      `This will return the Brand Name ${this.brand} , Model Name ${this.model} and the Year ${this.year}`
    );
  }
}

const car1 = new Car("Toyota", "Corolla", 2022);

car1.displayInfo();
