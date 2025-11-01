class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    const area = this.width * this.height;

    console.log(` The area of a rectangle is ${area}`);
  }

  getPerimeter() {
    const perimeter = 2 * (this.width + this.height);
    console.log(`The Perimeter of a rectangle is ${perimeter}`);
  }
}

const shape = new Rectangle(12, 6);
shape.getArea();
shape.getPerimeter();
