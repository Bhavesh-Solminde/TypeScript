//they have same signature and signature (datatype) can sometime be long
function makeChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}

function serveChai(order: { type: string; sugar: number; strong: boolean }) {
  console.log(order);
}

//Therefore they can be return as
type chai = {
  type: string;
  sugar: number;
  strong: boolean;
};
function makeChai2(order: chai) {
  console.log(order);
}
function serveChai2(order: chai) {
  console.log(order);
}

//
//type in a class
type TeaRecipe = {
  water: number;
  milk: number;
};

// class MasalaChai implements TeaRecipe {
//   water = 100;
//   milk = 50;
// }

// but type cannot be used when the synctax is this
// type CupSize = "small" | "large";
// class Chai implements CupSize { //this gives error in CupSize
//   size: "small" | "large" = "large";
// }

//Therefore we use interfaces
//Eg.
interface CupSize {
  size: "small" | "large";
}
class Chai implements CupSize {
  size: "small" | "large" = "large";
}

//IMP

// Always Use interfaces for Classes

//

//When you use Unions in the type it doesnot go in class so we interface for it
// type Response = {ok:true} | {ok:false}
// class myRes implements Response{
//   ok : boolean= true
// }

type TeaType = "masala" | "ginger" | "lemon"; //This is called literal types
function orderChai(t: TeaRecipe) {
  console.log(t);
}

type BaseChai = { teaLeaves: number };
type Extra = { masala: number };
type MasalaChai = BaseChai & Extra; //This is how we take intersection of two types
const Cup: MasalaChai = {
  teaLeaves: 2,
  masala: 1,
};

type User = {
  username: string;
  bio?: string; // this is the optional type decleration where we if a object got this value then he may or may not have this property
};

type Config = {
  readonly appName: string; //readonly means the this value can be assigned only once if it is assigned again then it will give error its like const but for type/properties
  version: number;
};
const cfg: Config = {
  appName: "Masterji",
  version: 1,
};
// cfg.appName = "Master"; // This will give error because appName cannot be assigned again
