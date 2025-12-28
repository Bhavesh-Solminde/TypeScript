//Array
//There are 2 ways to declare types in array
//1.
const chaiFlavours: string[] = ["Masala", "Adrak"];
const chaiPrice: number[] = [10, 20];

//2.
const rating: Array<number> = [2, 4, 5];

//For objects in arrays
type Chai = {
  name: string;
  price: number;
};
const menu: Chai[] = [
  { name: "Masala", price: 20 },
  { name: "Adrak", price: 30 },
];
menu.push({ name: "Lemon", price: 40 });

//Readonly keyword of types
const cities: readonly string[] = ["Mumbai", "Delhi"];
// cities.push("Pune") //This is not possible because of readonly

//multi-dimensional array
const table: number[][] = [
  [3, 4, 5],
  [1, 2, 3],
];

//
//Tuples
let chaiTuple: [string, number, boolean?];
chaiTuple: chaiTuple = ["Masala", 20];

//readonly tuples
const location2: readonly [number, number] = [28.6, 32.7];

const chaiItems: [name: string, price: number] = ["Masala", 34];

//
//Enums
//Eg.1
enum CupSize {
  SMALL = 4,
  MEDIUM,
  LARGE,
}
const size = CupSize.LARGE;
console.log(size);

//Eg.2
enum ChaiType {
  MASALA = "Masala",
  GINGER = "ginger",
}
function makeChai(type: ChaiType) {
  console.log(`Making: ${type}`);
}
makeChai(ChaiType.MASALA);

//Hetrogenus values
enum RandomEnum {
  Id = 1,
  NAME = "chai",
}

//Enums can also be const
const enum Sugar {
  LOW = 1,
  MEDIUM = 2,
  HIGH = 3,
}

//Every Buggy code
const t: [number, string] = [10, "Chai"];
t.push("pandu"); //This gives error because we can only have 2 values in the array 1 number other string
//Therefore avoid this
