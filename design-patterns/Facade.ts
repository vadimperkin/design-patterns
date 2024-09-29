// Subsystem Classes
class Chef {
  cookDish(dish: string) {
    console.log(`Chef is cooking ${dish} right now!`);
  }
}

class Waiter {
  takeOrder(order: string) {
    console.log(`Waiter is taking the order: ${order}.`);
  }
}

class BillingSystem {
  processPayment(amount: number) {
    console.log(`Processing payment of $${amount}.`);
  }
}

class KitchenDisplaySystem {
  displayOrder(order: string) {
    console.log(`Displaying order in the kitchen: ${order}.`);
  }
}

class RestaurantOrderFacade {
  private chef: Chef;
  private waiter: Waiter;
  private billingSystem: BillingSystem;
  private kitchenDisplay: KitchenDisplaySystem;

  constructor() {
    this.chef = new Chef();
    this.waiter = new Waiter();
    this.billingSystem = new BillingSystem();
    this.kitchenDisplay = new KitchenDisplaySystem();
  }

  placeOrder(dish: string, price: number) {
    this.waiter.takeOrder(dish);
    this.kitchenDisplay.displayOrder(dish);
    this.chef.cookDish(dish);
    this.billingSystem.processPayment(price);
  }
}
// ---------------------------------------------------

const restaurantOrder = new RestaurantOrderFacade();
restaurantOrder.placeOrder("Pizza", 20);
