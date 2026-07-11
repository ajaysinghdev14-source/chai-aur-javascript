class Cricketer {
  constructor(name, role) {
    this.name = name;
    this.role = role;
    this.matchesPlayed = 0;
    this.stamina = 100;
  }

  introduce() {
    return `${this.name} the ${this.role} | matchedPlayed: ${this.matchesPlayed} | stamina: ${this.stamina}`;
  }
}

const player1 = new Cricketer("Virat", "Batsman");
const player2 = new Cricketer("Bumrah", "Bowler");

console.log(player1.hasOwnProperty("name"));
console.log(typeof Cricketer);

class Debutant {
  constructor(name) {
    this.name = name;

    this.walkOut = () => `${this.name} walks out to bat for the first time`;
  }

  walkoutNormal() {
    return `${this.name} walks out to bat`;
  }
}

const debutant1 = new Debutant("Shubman");
const somethingFromLastClass = debutant1.walkOut;

const debutant2 = new Debutant("Yashasvi");
console.log(debutant1.walkOut === debutant2.walkOut);

console.log(somethingFromLastClass());

const d = new Debutant("Shubman D");
const deteched = d.walkoutNormal;
// console.log(deteched());
