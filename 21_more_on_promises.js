// console.log("Swastik");
// Promise.resolve("resolved value").then((v) => {
//   console.log("Microtask ", v);
// });
// console.log("Avishek");

function boilWater(ms) {
  return new Promise((res, rej) => {
    console.log("Krte hai ji boil");
    if (typeof ms !== "number" || ms < 0) {
      rej(new Error("ms must be in number and greater than zero"));
    }
    setTimeout(() => {
      res("water boiled");
    }, ms);
  });
}

boilWater(200)
  .then((msg) => console.log("Resolved:", msg))
  .catch((err) => console.log("Rejected: ", err.message));

function grindLeaves() {
  return Promise.resolve("Leaves grounded");
}

function steepTea(time) {
  return new Promise((res) => {
    setTimeout(() => res("Steeped tea"), time);
  });
}

function addSugar(spoons) {
  return `Added ${spoons} sugar`;
}

grindLeaves().then((val) => console.log(val));
