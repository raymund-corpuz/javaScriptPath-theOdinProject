class Shape {}

class Rectangle extends Shape {
  constructor(height, width) {
    super();
    this.height = height;
    this.width = width;
  }

  setHeight(newHeight) {
    this.height = newHeight;
  }

  setWidth(newWidth) {
    this.width = newWidth;
  }

  getArea() {
    return this.height * this.width;
  }
}

class Square extends Shape {
  constructor(size) {
    super();
    this.size = size;
  }

  setSize(newSize) {
    this.size = newSize;
  }

  getArea() {
    return this.size * this.size;
  }
}

const rectangle = new Rectangle(4, 5);
rectangle.setHeight(6);
rectangle.setWidth(7);
console.log(`Rectangle Area: ${rectangle.getArea()}`); // 6 * 7 = 42

const square = new Square(4);
square.setSize(5);
console.log(`Square Area: ${square.getArea()}`); // 5 * 5 = 25
