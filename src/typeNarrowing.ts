//Suggestions according to the type
function getChai(kind: string | number) {
  if (typeof kind === "string") {
    return `Making ${kind} chai`; // here it knows its string so it suggests string's methods
  }
  return `Chai order: ${kind}`; //here it knows its number it suggests number's methods
}
console.log(getChai("Masala"));

//checking truthiness not under typescript tut but are best practices
//1.
function serveChai(msg?: string) {
  if (msg) {
    return `Serving ${msg}`;
  }
  return `Serving default masala chai`;
}
console.log(serveChai());

//2. Type Narrowing using Exhaustive checks checking all possibilities
function orderChai(size: "small" | "medium" | "large" | number) {
  if (size === "small") {
    return `small cutting chai...`;
  }
  if (size === "medium" || "large") {
    return `make extra chai`;
  }
  return `chai order ${size}`;
}
console.log(orderChai("large")); // get suggestion

//3. Type Narrowing using a Type Guard (instanceof)
class KulhadChai {
  serve() {
    return `Serving kulhad chai`;
  }
}

class Cutting {
  serve() {
    return `Serving Cutting chai`;
  }
}

function serve(chai: KulhadChai | Cutting) {
  if (chai instanceof KulhadChai) {
    return chai.serve(); //we are sure that this is serve method of kulhadChai
  }
  return chai.serve();
}
let typeChai = new KulhadChai();
console.log(serve(typeChai));

//4. Using Type keyword and User-Defined Type Guard
type ChaiOrder = {
  taste: string;
  sugar: number;
};

function isChaiOrder(obj: any): obj is ChaiOrder {
  return (
    typeof obj === "object" &&
    typeof obj !== null &&
    typeof obj.taste === "string" &&
    typeof obj.sugar === "number"
  );
}

function serveItem(item: ChaiOrder | string) {
  if (isChaiOrder(item)) {
    return item.sugar; // auto suggestion for its methods // the ide knows its properties are taste and sugar
  }
  return `serving ${item}`;
}
let item: ChaiOrder = { taste: "yummy", sugar: 3 };
console.log(serveItem(item));

//interesting way of using type in industry
type MasalaChai = { taste: "masala"; spiceLevel: number };
type GingerChai = { taste: "ginger"; amount: number };
type ElaichiChai = { taste: "elaichi"; aroma: number };

type chai = MasalaChai | GingerChai | ElaichiChai;

function MakeChai(order: chai) {
  switch (order.taste) {
    case "masala":
      return `making Masala chai`;
      break;
    case "ginger":
      return `making Ginger chai`;
      break;
    case "elaichi":
      return `making Elaichi chai`;
      break;
  }
}
let order: chai = { taste: "ginger", amount: 5 };
console.log(MakeChai(order));

//checking specific properties to determine the type
function brew(order: MasalaChai | GingerChai) {
  if ("spiceLevel" in order) {
    return `Its a MasalaChai order`; // but no auto suggestions when doing order.
  }
}
