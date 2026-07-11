const codeName = "Shawdow Fox";
const backupName = String("Night Owl");
const templateName = `Agent ${codeName}`;

let intercepted = "HELLO";
intercepted[0] = "A";
console.log(intercepted); // slient fail

const secretCode = "OMEGA-7";
console.log(secretCode.length);
console.log(secretCode.charAt(0));
console.log(secretCode.charAt(1));
console.log(secretCode.at(-1));
console.log(secretCode.charAt(99));
console.log(secretCode.at(99));
console.log(secretCode[0]);
console.log(secretCode[99]);

const rawTransmission = "The Eagle has landed";
console.log(rawTransmission.toUpperCase());
console.log(rawTransmission.toLowerCase());

const message = "The drop point is at Dock 7. Repeat, Dock 7.";
console.log(message.indexOf("Dock"));
console.log(message.lastIndexOf("Dock"));
console.log(message.includes("Dock"));
console.log(message.startsWith("The"));
console.log(message.endsWith("7."));

const orders = "move-north|hold-position|move-east|move-south";
ordersList = orders.split("|");
console.log(ordersList);

const myDataValue = "SOS".split("");
console.log(typeof myDataValue);
console.log(Array.isArray(myDataValue));

const missionNumber = "42";
console.log(missionNumber.padStart(6, "X"));

const spellCard = `

++=================
`;
console.log(spellCard);

// const profile = `
// ${checker ? "true" : "false"}
// `;

// graphql``;
// Tagged Template Literal

console.log(void 0);
console.log(void "hi");

let generalStore = {
  name: "Kirana",
  goods: 2,
};

console.log(generalStore);
generalStore = null;
console.log(generalStore);
