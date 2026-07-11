// call and apply => basic chef (kitchen)
// bind => return a new function
//
//

function cookDish(ingredient, style) {
  return `${this.name} prepares ${ingredient} in ${style} style!`;
}

const sharmaKitchen = { name: "Sharma ji kitchen" };
const gutpaKitchen = { name: "Gupta ji kitchen" };

console.log(cookDish.call(sharmaKitchen, "Panner and Spicy", "Muglai"));

const guptaOrder = ["Chole Kulche", "Punjabi Dhaba"];
console.log(cookDish.apply(gutpaKitchen, guptaOrder));

// const bills = [100, 40, 55, 50];
// Math.max.apply(null, bills);
// Math.max(...bills);

function reportDelivery(location, status) {
  return `${this.name} at ${location}: ${status}`;
}

const deliveryBoy = { name: "Ranveer" };
console.log("call: ", reportDelivery.call(deliveryBoy, "Lyari", "Ordered"));
console.log("apply: ", reportDelivery.apply(deliveryBoy, ["Mars", "Pick up"]));
console.log("Bind: ", reportDelivery.bind(deliveryBoy, "Haridwar", "WHAT"));

const bindReport = reportDelivery.bind(deliveryBoy);
console.log(bindReport("Haridwar", "WHAT"));
