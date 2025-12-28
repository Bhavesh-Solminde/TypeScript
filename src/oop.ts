// class Chai {
//   flavour: string;
//   price: number;

//   constructor(flavour: string, price: number) {
//     this.flavour = flavour;
//     this.price = price;
//   }
// }

// const MasalaChai = new Chai("Masala", 40);
// MasalaChai.flavour = "masala";

class Chai {
  public flavor: string = "Masala";
  private secretIngredients = "Caradamon";
  reveal() {
    return this.secretIngredients;
  }
  changeSI(si: string) {
    this.secretIngredients = si;
  }
}

class Shop {
  protected ShopName = "Cafe";
}
class Branch extends Shop {
  getName() {
    return this.ShopName; //protected values can be accessed by the children of that class
  }
}

class Wallet {
  #balance = 100; // this is also valid for the private operators
  getBalance() {
    return this.#balance;
  }
}

class Cup {
  readonly capacity: number = 250;

  constructor(capacity: number) {
    this.capacity = capacity;
  }
}
const demoCup = new Cup(3);
// demoCup.capacity=5  // This will give an error

class ModernChai {
  private _sugar: number = 2;
  get sugar(): number {
    return this._sugar;
  }
  set sugar(value: number) {
    if (value > 5) throw new Error("Too sweet");
    this._sugar = value;
  }
}
// How to use it
const c = new ModernChai();
c.sugar = 4;

class EkChai {
  static shopName = "cafe"; //By making it static now the object made from this class will not be able to access this value. static variables and functions can onl be used by the class or its childrens
  constructor(public flavour: string) {}
}
console.log(EkChai.shopName);

abstract class Drink {
  abstract make(): void;
}

class MyChai extends Drink {
  make() {
    console.log("Brewing chai"); //the MyChai class will give error until make() function is not defined
  }
}

//Composition concept (This is also used instead of inheritance)
class Heater {
  heat() {}
}

class ChaiMaker {
  constructor(private heater: Heater) {}
  make() {
    this.heater.heat; //The heat function can be used by the ChaiMaker class because it in the constructor, after this heat can be invoked
  }
}
