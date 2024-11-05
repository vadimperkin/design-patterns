interface Icecream {
  price(): number;
  description(): string;
}

class BasicIcecream implements Icecream {
  price(): number {
    return 3;
  }

  description(): string {
    return "Basic icecream";
  }
}

class IcecreamDecorator implements Icecream {
  constructor(protected icecream: Icecream) {}

  price(): number {
    return this.icecream.price();
  }

  description(): string {
    return this.icecream.description();
  }
}

class ChocolateDecorator extends IcecreamDecorator {
  constructor(icecream: Icecream) {
    super(icecream);
  }

  price(): number {
    return this.icecream.price() + 2;
  }

  description(): string {
    return this.icecream.description() + ", Chocolate";
  }
}

class PistachioDecorator extends IcecreamDecorator {
  constructor(icecream: Icecream) {
    super(icecream);
  }

  price(): number {
    return this.icecream.price() + 3;
  }

  description(): string {
    return this.icecream.description() + ", Pistachio";
  }
}
// ----------------------------------------------------

let myIceCream = new BasicIcecream();
console.log(`${myIceCream.description()} - ${myIceCream.price()}`); // Basic icecream - 3

myIceCream = new ChocolateDecorator(myIceCream);
console.log(`${myIceCream.description()} - ${myIceCream.price()}`); // Basic icecream, Chocolate - 5

myIceCream = new PistachioDecorator(myIceCream);
console.log(`${myIceCream.description()} - ${myIceCream.price()}`); // Basic icecream, Chocolate, Pistachio - 8

// This allows behavior to be added to individual objects, either statically or dynamically, without affecting the behavior of other objects from the same class.
