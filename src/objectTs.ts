const chai = {
  // In this the object chai is inferencing the types of the property name,price,isHot
  name: "Masala chai",
  price: 20,
  isHot: true,
};

//But we can also do and we should do
let tea: {
  name: string;
  price: number;
  isHot: boolean;
};
tea = {
  name: "adrak tea",
  price: 35,
  isHot: true,
};

// we can also define alias object of this
type Tea = {
  name: string;
  price: number;
  ingredients: string[]; //Here if we do spelling mistake than we will know it when we declare the variable which will save us from a lot of bugs
};
const adrakChai: Tea = {
  name: "Adrak Chai",
  price: 35,
  ingredients: ["milk", "ginger", "tealeaves", "sugar"], //Here number cant come because we have defined this array as a string array
};

//Duck typing - If it looks like a duck it walks like a duck then it might be a duck. That  means to be a duck it should atleast look and walk like a duck i.e it should have the property of look and walk that of a duck
//Eg.1
type Cup = { size: string };
let smallCup: Cup = { size: "200ml" };
let bigCup = { size: "300ml", material: "steel" };
smallCup = bigCup; // this is satisfied but the vice versa will be not. Apply duck theory on it

//Eg.2
type Brew = { brewTime: number };
const coffee = { brewTime: 5, beans: "Arabica" };
const chaiBrew: Brew = coffee;

//Eg.3
type User = {
  username: string;
  password: string;
};
const u: User = {
  username: "Bhavesh",
  password: "123", // here its important to give both the properties. It can be more than this but not less than this
};

//spilting out datatypes
type Address = { street: string; pin: number };
type Item = { name: string; quentity: number };

type Order = {
  id: string;
  items: Item[]; // We can also write Item type in here directly but this gives us more code clarity
  address: Address;
};

//
//Partial (any or no property from the Chai type)
type Chai = {
  name: string;
  price: number;
  isHot: boolean;
};

const updateChai = (updates: Partial<Chai>) => {
  console.log("updating chai with", updates);
};
const Chaitype: Partial<Chai> = {
  name: "Masala chai",
  price: 35,
};
updateChai({ price: 25 }); // Here allthough all properties are required you can pass 0 to n properties because all the properties becames optional because of the partial keyword
updateChai({ isHot: false });
updateChai({}); // WE can also pass empty object in this which is a problem

//Required (Properties from the ChaiOrder must be present)
type ChaiOrder = {
  name?: string;
  price?: number;
  isHot?: boolean;
};
const placeOrder = (order: Required<ChaiOrder>) => {
  console.log(order);
};
const chaiOrder: Required<ChaiOrder> = {
  name: "Masala Chai",
  price: 45,
  isHot: false,
};
placeOrder({ name: "Masala Chai", price: 35, isHot: false }); // here all 3 properties are important even though they are optinal initially. Because of the Required keyword

//Pick (We can pick which properties should the object have and it cant have other than that even if they are in the parent type )
type Chai2 = {
  name: string;
  price: number;
  isHot: boolean;
  ingredients: string[];
};
type BasicChaiInfo = Pick<Chai, "name" | "price">;

const chaiInfo: BasicChaiInfo = {
  name: "Masala Chai",
  price: 35,
  // isHot:true  // This is not allowed and will give error even though its present in the parent type. Only the properties mentioned in the Pick are allowed
};

//Omit (The value inc)
type Chai3 = {
  name: string;
  price: number;
  isHot: boolean;
  secretIngredients: string[];
};

type BasicChaiInfo2 = Omit<Chai3, "isHot" | "SecretIngredients">;
const chaiInfo2: BasicChaiInfo = {
  name: "Lemon tea",
  price: 60,
  // isHot:true,  //This is not allowed as it is included in the Omit
};
