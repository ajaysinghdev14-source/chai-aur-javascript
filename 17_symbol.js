const aadhaar_of_mayur = Symbol("aadhaar");
const aadhaar_of_piyush = Symbol("aadhaar");

console.log(typeof aadhaar_of_mayur);
console.log(aadhaar_of_mayur === aadhaar_of_piyush);
console.log(aadhaar_of_mayur.toString());
console.log(aadhaar_of_mayur.description);

const nonIndian = Symbol();
console.log(nonIndian.description);

const biometricHash = Symbol("biometricHash");
const bloodGroup = Symbol("bloodGroup");

const citizenRecords = {
    name: "Ved Pandey",
    age: 21,
    [biometricHash]: "a7kjhdteb786",
    [bloodGroup]: "O+",
};

console.log(Object.keys(citizenRecords));
console.log(Object.getOwnPropertySymbols(citizenRecords));

const rtiQueryBook = {
    queries: ['infra budget', 'Ration Card', 'Education Budget', 'Startup laws'],
    [Symbol.iterator]() {
        let index = 0;
        const queries = this.queries
        return {
            next() {
                if (index < queries.length) {
                  return {value: queries[index++], done: false}
                }
                return {value: undefined, done: true}
            }
        }
    }
}

for (const query of rtiQueryBook) {
  console.log(`Filing RTI: ${query}`)
}

const governmentSchema = {
    name: 'PM Kisan Yojna',
    people: 54,
    [Symbol.toPrimitive](hint) {
        if (hint === 'string') return this.name
        if(hint === 'number') return 88
    }
}

console.log(+governmentSchema)
console.log(`${governmentSchema}`)
