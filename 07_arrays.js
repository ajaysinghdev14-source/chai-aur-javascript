const carriage1 = ["Veer", "Ayush", "Ravi"];
const emptyCarriage = [];

const threeEmptySeats = Array(3);
console.log('three Empty seats: ', threeEmptySeats.length);
threeEmptySeats.push(10);
threeEmptySeats.push(20);
console.log(threeEmptySeats.length);
threeEmptySeats[1] = 'mike'
console.log(threeEmptySeats);
console.log(threeEmptySeats.length);

const passenger = Array("veer", "ayush", "ravi");

const singlePassenger = Array.of(3);
console.log(singlePassenger.length);
console.log(singlePassenger);

const trainCode = Array.from('DUST');
console.log(trainCode);

const tempTrain = ['A', 'B', 'C', 'D']
console.log(tempTrain.length);
tempTrain.length = 3
console.log(tempTrain.length);
tempTrain.length = 5;
console.log(tempTrain);

// push, pop, shift, unshift, splice
// concat, slice, flat  - returns new array without touching the original array

// const trainCopy = wholeTrain.slice();

// searching: index, indexOf, includes, find, findIndex
//

console.log(typeof []);
console.log(Array.isArray(2));

// key points:
// 1. [], avoid Array(4) - there is empty slot
// 2. array are 0 based
// 3. Mutating methods: push, pop, shift, unshift, splice
// 4. Non Mutating: concat, slice, flat, flatmap
// 5. Searching: includes
// 6. Array.isArray()