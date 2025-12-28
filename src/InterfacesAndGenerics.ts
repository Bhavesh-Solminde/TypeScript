//Interfaces
//Interfaces for objects
interface Chai {
  flavor: string;
  price: number;
  milk?: number;
}
const masala: Chai = {
  flavor: "masala",
  price: 45,
};

interface Shop {
  readonly _id: string;
  name: string;
}

const s: Shop = {
  _id: "1nadsfgb234yh456t",
  name: "Surbhi",
};
// s._id = "3"; //its readonly

//Interfaces in functions
interface DiscountCalculator {
  (price: number): number;
}

const apply50: DiscountCalculator = (p) => p * 0.5;
console.log(apply50(150));

//Interfaces in Methods
interface Machine {
  start(): void;
  stop(): void;
}
const teaMachine: Machine = {
  start() {
    console.log(`Machine starts`);
  },
  stop() {
    console.log(`Machine stops`);
  },
};

//Index signature (but coders avoid it becasue of the syntax)
interface ChaiRatings {
  [flavor: string]: number;
}
const ratings: ChaiRatings = {
  masala: 4,
  ginger: 5,
};

//Most imp work in interfaces
//Suppose you are importing a lib for your code
//you are creating a interface for lib and one for your function
interface User {
  name: string;
}
interface User {
  price: number;
}
const u: User = {
  name: "Opus",
  //we can see that it is not satisfied by only name it also needs the price
  price: 40,
};
//Therefore we can say that they merge

//Eg.
// you have a database setup
interface Message {
  _id: string;
  sentBy: string;
  sentTo: string;
  message: string;
}

// But after defining some functions your buddy
//  who is coding with you came to know that you
//  need one more property, so he can do this
interface Message {
  // in some other file
  createdAt: string;
}
//by this you have to make a changes everywhere, where createdAt is not present and save you from a lot of bugs

//We can also extend interfaces
interface A {
  a: string;
}
interface B {
  b: string;
}
interface C extends A, B {}

//

//

//

//

//

//

//

//

//

//

//

//Generics
