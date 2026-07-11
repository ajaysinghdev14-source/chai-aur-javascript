const clue1 = "Muddy footprint near the window";
const clue2 = "Broken glass on the table";

console.log("clue found: ", clue1);
console.log("clue found: ", clue2);

const suspectName = "Dipesh";
const suspectAge = 20;
console.log("Suspect: ", suspectName, " | Age : ", suspectAge);

console.warn("Warning: FingerPrint evedence detected");
console.error("Warning: FingerPrint evedence detected");

// arrays of object
const evidenceLog = [
  { id: 1, item: "Muddy footprint", location: "window still" },
  { id: 2, item: "Broken Glass", location: "Living Room" },
  { id: 3, item: "Red Fiber strand", location: "Door handle" },
];

console.table(evidenceLog);

console.group("Grouped starts");
console.log("My log 1");
console.log("My log 2");
console.log("My log 3");
console.groupEnd();

console.time("time starts now");
let dnaMatches = 0;
for (let i = 0; i < 100000; i++) {
  dnaMatches++;
}
console.timeEnd("time end now");

console.log("chaicode");
console.log("chaicode");
console.log("chaicode");
console.log("chaicode");
console.log("chaicode");
