class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius ** 2;
  }
  perimeter() {
    return 2 * Math.PI * this.radius;
  }
}

// const circle = new Circle(3.5);

class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }
  area() {
    return this.length * this.width;
  }
  perimeter() {
    return 2 * (this.length + this.width);
  }
}

// const rectangle = new Rectangle(4, 2);

class Square {
  constructor(length) {
    this.length = length;
  }
  area() {
    return this.length ** 2;
  }
  perimeter() {
    return 4 * this.length;
  }
}

// const square = new Square(5);

function main() {
  while (true) {
    const choice = prompt("Menu-\nEnter your choice: ");
    switch (choice) {
      case "circle":
        const radius = prompt("Enter the radius: ");
        const circle = new Circle(radius);
        console.log(`Area of Circle is: ${circle.area()}`);
        console.log(`Perimeter of Circle is: ${circle.perimeter()}`);
        break;
      case "rectangle":
        const length = prompt("Enter the length: ");
        const width = prompt("Enter the width: ");
        const rectangle = new Rectangle(length, width);
        console.log(`Area of Rectangle is: ${rectangle.area()}`);
        console.log(`Perimeter of Rectangle is: ${rectangle.perimeter()}`);
        break;
      case "square":
        const side = prompt("Enter the side: ");
        const square = new Square(side);
        console.log(`Area of Square is: ${square.area()}`);
        console.log(`Perimeter of Square is: ${square.perimeter()}`);
        break;
      default:
        console.log(
          "This is not a recognized shape. Allowed shapes are: Circle, Square, Rectangle"
        );
    }
  }
}

main();
