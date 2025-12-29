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
  //we can see that it is not satisfied by only name, it also needs the price
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
interface C extends A, B {} // That means the object with type C should have property a and b too

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
// Generics let you define a type once and make a function, class, or object return or use that exact same type safely.
function wrapInArray<T>(item: T): T[] {
  return [item];
}

wrapInArray("masala");
wrapInArray(42);
wrapInArray({ flavor: "Ginger" });

function pair<A, B>(a: A, b: B): [A, B] {
  let c = 0;
  return [a, b]; // this should be [b,a]. Order,quantity and type matters
}

//Usage
console.log(pair("Masala", "Ginger")); // will return a array of both the strings
//we can also do
pair("masala", { flavor: "ginger" });
pair("Masala", 45);

// Making genric interfaces
interface Box<T> {
  content: T;
}
const numberBox: Box<number> = { content: 10 }; // if not number then this will give an error
const numberBox2: Box<{ title: string }> = {
  content: { title: "TypeScript" },
};

// In realWOrld it is used in ApiResponses, formstate (in React), etc

interface ApiResponse<T> {
  status: number;
  message: string;
  data: T;
}
interface User2 {
  username: string;
  email: string;
  resumeText: string;
  atsScore: number;
}
const res: ApiResponse<{ user: User2 }> = {
  status: 201,
  message: "User created successfully",
  data: {
    user: {
      username: "Bhavesh",
      email: "abd@gmail.com",
      resumeText: "adfasdg",
      atsScore: 99,
    },
  },
};
