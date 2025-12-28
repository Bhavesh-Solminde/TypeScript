function makeChai(type: string, cups: number) {
  console.log(`Makinf ${2} cups of ${type}`);
}

makeChai("Masala", 2);

function getChaiPrice(): number {
  return 23;
}

function makeOrder(order: string): string {
  // if(!order) return null //This will also give error
  return order;
}

// To log something we know that that function will not return anything so we give it return type of void
function logChai(): void {
  console.log("Chai is ready and was served");
}

//Optional parameter  (Make sure the optional parameter is at the end of the arguments)
function orderChai(type?: string) {}

//default parameter   (Make sure the default parameter is at the end of the arguments )
function orderChai2(type: string = "Masala") {}

//people are scare of this for no reason
function createChai(order: {
  type: string;
  sugar: number;
  size: "small" | "large";
}): number {
  return 4;
}
