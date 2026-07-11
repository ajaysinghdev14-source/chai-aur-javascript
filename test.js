const mainHero = {
  name: "Deepak",
  level: 12,
  inventory: ["Flame Sword", "Shield"],
};

// we create a copy using the spread operator
const shadowClone = { ...mainHero };

// The clone takes some damage and fields a new items
shadowClone.level = 10;
shadowClone.inventory.push("Health potion");

console.log("Main hero level: ", mainHero.level);
console.log("Main hero inventory size", mainHero.inventory.length);
