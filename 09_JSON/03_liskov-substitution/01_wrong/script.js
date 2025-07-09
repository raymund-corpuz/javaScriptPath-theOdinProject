//The Liskov substitution principle states that any class should be substitutable for its parent class without unexpected consequences.

class Rectangle {
  constructor(height, width) {
    this.height = height;
    this.width = width;
  }

  setHeight(newHeight) {
    this.height = newHeight;
  }
}

class Square extends Rectangle {}

const rectangle = new Rectangle(4, 5);
const square = new Square(4, 4);

console.log(`Rectangle Height: ${rectangle.height}, Width: ${rectangle.width}`);

console.log(`Square Height: ${square.height}, Width: ${square.width}`);

square.setHeight(5);
console.log(`Square Height: ${square.height}, Width: ${square.width}`);
