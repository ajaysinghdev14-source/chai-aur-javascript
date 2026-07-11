// console.log(brewPotion("Healing herb", 3));

function brewPotion(ingredients, dose) {
  return `Brewing a potion with ${ingredients.join(", ")} at a dose of ${dose}ml.`;
}

const minElixir = function (ingredients) {
  return `Mixing a minimum elixir with ${ingredients.join(", ")}.`;
};

// no own this, no arguments object
const distilEssence = (ingredients) => {
  return `Distilling essence from ${ingredients.join(", ")}.`;
};

function oldBrewingLogs() {
  console.log("Type: ", typeof arguments);
  console.log("Is Array: ", Array.isArray(arguments));
  const argsArray = Array.from(arguments);
  console.log(argsArray);
}

oldBrewingLogs("Sage", "Rosemary");

const arrowBrew = () => {
  console.log(arguments);
};

arrowBrew();

let globalCount = 0;

function brewAndCount(name) {
  globalCount++;
}

// HOF
function anotherFunctionForClass(brewAndCount) {
  return function newBrew() {
    // do something
  };
}

// IIFE
//

// const postionShop = (function () {})();
// (function () {})();

const potionShop = (function () {
  let inventory = 0;

  return {
    brew() {
      inventory++;
      return `Brew potion #${inventory}`;
    },
    getStock() {
      return inventory;
    },
  };
})();

console.log(potionShop);
console.log(potionShop.brew());
console.log(potionShop.inventory);

function makeFunc() {
  const name = "Mozilla";

  function displayName() {
    console.log(name);
  }
  return displayName;
}

const myFunc = makeFunc();
myFunc();
