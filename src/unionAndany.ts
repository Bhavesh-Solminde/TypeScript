//Union
let Subs: string | number = "1M";
Subs = 100000000;

//Making custom dataTypes in union
let ApiRequestStatus: "pending" | "success" | "error" = "pending"; //value of this cant anything other than this three
// ApiRequestStatus= "done" // --> this will give an typeError
ApiRequestStatus = "success"; //get auto suggestions

// Any
const orders = ["24", "53", "42", "43", "12"];
//let currentOrder; //By inference its any which is bad
//let currentOrder: string; //In this the value can also be undefined so the ts gives error
let currentOrder: string | undefined; //Now the dataType cannot be other than string or undefinied
for (let order of orders) {
  if (order === "24") {
    currentOrder = order;
    break;
  }
}

console.log(currentOrder);
