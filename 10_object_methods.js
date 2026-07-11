const artifact = {
  name: "Obsidian Crown",
  era: "Ancient",
  value: 50000,
  material: "volconic glass",
};

const keys = Object.keys(artifact);
const values = Object.values(artifact);
const entries = Object.entries(artifact);

console.log(keys);
console.log(values);
console.log(entries);

for (const [key, value] of Object.entries(artifact)) {
  console.log(key, value);
}

const priceList = [
  ["Obsidian Crown", 50000],
  ["Ruby Pendant", 30000],
  ["Iron Shield", 5000],
];

const priceObject = Object.fromEntries(priceList);
console.log(priceObject);

const displayCase = {
  artifact: "Obsidian",
  location: "Hall A, Case 3",
  locked: true,
};

Object.freeze(displayCase);
delete displayCase.locked;
displayCase.newProp = "test";
console.log(displayCase);

const catelogEntry = {
  id: "ART-001",
  description: "Ancient Crows",
  verified: true,
};

Object.seal(catelogEntry);

const secureArtifact = {
  name: "Ruby Pendant",
};

Object.defineProperty(secureArtifact, "catelogId", {
  value: "SEC-999",
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(secureArtifact.catelogId);
secureArtifact.catelogId = "HACKED";
console.log(secureArtifact.catelogId);

for (const [key, value] of Object.entries(secureArtifact)) {
  console.log(`${key} : ${value}`);
}

const desc = Object.getOwnPropertyDescriptor(secureArtifact, "name");
console.log(desc);

// loop key points
//
// 1. for loop
// 2. while loop
// 3. do while loop
// 4. for...in - used on objects avoid on array
// 5. for...of - used on arrays, strings
// 6. map, foreach, filter, reduce
