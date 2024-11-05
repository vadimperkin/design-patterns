interface Observer {
  update(data: any): void;
}

interface Subject {
  registerObserver(observer: Observer): void;
  unregisterObserver(observer: Observer): void;
  notifyObservers(): void;
}

class MySubject implements Subject {
  private observers: Observer[] = [];
  private state: any;

  public registerObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  public unregisterObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  public notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.state);
    }
  }

  public getState(): any {
    return this.state;
  }

  public setState(state: any): void {
    this.state = state;
    this.notifyObservers();
  }
}

class MyObserver implements Observer {
  private observerId: number;
  private static idCounter = 0;

  constructor() {
    this.observerId = MyObserver.idCounter++;
  }

  public update(data: any): void {
    console.log(
      `Observer ${this.observerId} has been successfully received update: `,
      data
    );
  }
}

// Example of using
const subject = new MySubject();

const observer1 = new MyObserver();
const observer2 = new MyObserver();

subject.registerObserver(observer1);
subject.registerObserver(observer2);

subject.setState("New state 1"); // alter state and notify all observers

subject.unregisterObserver(observer1);
subject.setState("New state 2"); // alter state and notify only observer2 since observer1 has been unsubscribed
/**
 * Now we can easily add/remove additional observers without modifying MySubject class 
 * each time when it will require new functionality.
 */
