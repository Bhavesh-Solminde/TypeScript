// Type assertion

// Forcefull type assertion
// Eg.1
let response: any = "42";
let numericLength: number = (response as string).length;

// Eg.2
type Book = {
  name: string;
};
let bookString: string = '{"name": "who moved my cheese"}'; //imaging this is in the local storage
// let bookObject= JSON.parse(bookString) // IDE/TS dont know that this matches the book type or no
let bookObject = JSON.parse(bookString) as Book; // now we are 100% sure that this is Book type
console.log(bookObject.name); //now you will get name suggestion for this as Ts/IDE considers it as a Book type

//Eg.3
const inputElement = document.getElementById("username") as HTMLInputElement;

//
// Any vs Unknown
let anyValue: any;
anyValue = [43, 32];
anyValue = "Bhavesh";
anyValue = 2.4;
anyValue.toUpperCase(); // doesnot give any error while runTime. therefore wastes time

let unknownValue: unknown;
unknownValue = [3423, 42.2];
unknownValue = "jayesh";
unknownValue = 52.2;
if (typeof unknownValue === "string") {
  unknownValue.toUpperCase(); // possible after type checking
}
// unknownValue.toUpperCase(); // not possible and gives error while compiling only

//try and catch block
try {
} catch (error) {
  if (error instanceof Error) {
    console.log(error.message);
  }
  console.log("error", error);
}

const data: unknown = "chai";
const strData: string = data as string;

//Datatype never
type Role = "admin" | "user";

function redirectBasedOnRole(role: Role): void {
  if (role === "admin") {
    console.log(`give admin permissons`);
    return;
  }
  if (role === "user") {
    console.log(`give user permissions`);
    return;
  }
  role;
}
