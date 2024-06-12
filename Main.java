import java.util.Scanner;

abstract class Shape {
    abstract double area();
    abstract double perimeter();
}

class Circle extends Shape {
    double radius;

    Circle(double radius) {
        this.radius = radius;
    }

    @Override
    double area() {
        return Math.PI * Math.pow(radius, 2);
    }

    @Override
    double perimeter() {
        return 2 * Math.PI * radius;
    }
}

class Rectangle extends Shape {
    double length;
    double width;

    Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }

    @Override
    double area() {
        return length * width;
    }

    @Override
    double perimeter() {
        return 2 * (length + width);
    }
}

class Square extends Shape {
    double side;

    Square(double side) {
        this.side = side;
    }

    @Override
    double area() {
        return Math.pow(side, 2);
    }

    @Override
    double perimeter() {
        return 4 * side;
    }
}



public class Main {

    public static void main(String[] args) {
        try (Scanner scanner = new Scanner(System.in)) {
            while (true) {
                System.out.println("Menu-\nEnter your choice: ");
                String choice = scanner.nextLine().toLowerCase();

                switch (choice) {
                    case "circle" -> {
                        System.out.println("Enter the radius: ");
                        double radius = scanner.nextDouble();
                        Circle circle = new Circle(radius);
                        System.out.println("Area of Circle is: " + circle.area());
                        System.out.println("Perimeter of Circle is: " + circle.perimeter());
                    }
                    case "rectangle" -> {
                        System.out.println("Enter the length: ");
                        double length = scanner.nextDouble();
                        System.out.println("Enter the width: ");
                        double width = scanner.nextDouble();
                        Rectangle rectangle = new Rectangle(length, width);
                        System.out.println("Area of Rectangle is: " + rectangle.area());
                        System.out.println("Perimeter of Rectangle is: " + rectangle.perimeter());
                    }
                    case "square" -> {
                        System.out.println("Enter the side: ");
                        double side = scanner.nextDouble();
                        Square square = new Square(side);
                        System.out.println("Area of Square is: " + square.area());
                        System.out.println("Perimeter of Square is: " + square.perimeter());
                    }
                    default -> System.out.println("This is not a recognized shape. Allowed shapes are: Circle, Square, Rectangle");
                }
                scanner.nextLine();  // Consume the newline left-over
            }
        }
    }
}
