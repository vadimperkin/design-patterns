interface Shape {
  drawFigure(): string;
}

class Circle implements Shape {
  public drawFigure(): string {
    return "Circle has been drawn";
  }
}

class Triangle implements Shape {
  public drawFigure(): string {
    return "Trianlge has been drawn";
  }
}

class Creator {
  public static factoryMethod(type: string): Shape {
    if (type === "Circle") {
      return new Circle();
    } else if (type === "Triangle") {
      return new Triangle();
    }
    throw new Error("Unknown product type.");
  }
}
// --------------------------------------------------

const circle = Creator.factoryMethod("Circle");
console.log(circle.drawFigure()); // "Circle has been drawn"

const triangle = Creator.factoryMethod("Triangle");
console.log(triangle.drawFigure()); // "Trianlge has been drawn"
