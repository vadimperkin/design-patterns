class Laptop {
  private company: string;
  private model: string;
  private color: string;
  private year: number;

  constructor(builder: LaptopBuilder) {
    this.company = builder.company;
    this.model = builder.model;
    this.color = builder.color;
    this.year = builder.year;
  }

  public getLaptopInfo(): void {
    console.log(
      `Your laptop has: company-${this.company}, model-${this.model}, color - ${this.color}, year-${this.year}`
    );
  }
}

class LaptopBuilder {
  public company: string;
  public model: string;
  public color: string;
  public year: number;

  constructor(company: string, model: string) {
    this.company = company;
    this.model = model;
  }

  public setColor(color: string): LaptopBuilder {
    this.color = color;
    return this;
  }

  public setYear(year: number): LaptopBuilder {
    this.year = year;
    return this;
  }

  public build(): Laptop {
    return new Laptop(this);
  }
}
// ------------------------------------------------

const myLaptop = new LaptopBuilder("Apple", "MacBook Pro")
  .setColor("Black")
  .setYear(2024)
  .build();

myLaptop.getLaptopInfo(); // 
// This pattern allows us to construct complex objects step by step.