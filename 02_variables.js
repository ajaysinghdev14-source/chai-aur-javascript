var shipName = "The Amber";
console.log("Shipname: ", shipName);

let crewCount = 12;
console.log("crew count: ", crewCount);
crewCount = 14;

const captainName = "Jack Sparrow";
console.log("Captain name: ", captainName);
// captainName = "dipesh";

if (true) {
  var leakyTeasure = "Gold Coin";
}

console.log("Leaky Teasure: ", leakyTeasure);

let shipSpeed = 22;
let _privateLog = "secret";
let _ = "a";
let $me = "ajay";
let MONGODB_URL = "";

const treasureChest = {
  gold: 100,
  rubies: 50,
  maps: 2,
};

treasureChest.gold = 40; // property change
// treasureChest = { gold: 50 }; // complete reference change

const crewRoster = ["Alok", "Abhinav", "Tanish"];
crewRoster.push("vraj");
crewRoster[0] = "shubham";
// crewRoster = ["Someone"]; // not allowed
