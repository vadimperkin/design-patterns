class Singleton {
  private static instance: Singleton;
  private constructor() {}

  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  public someMethod(): void {
    console.log("Some other method is executing!");
  }
}
// ------------------------------------------------
const myInstance1 = Singleton.getInstance();
const myInstance2 = Singleton.getInstance();
console.log(myInstance1 === myInstance2);
// We are ensured that a class has only one instance and providing a global point of access to it.