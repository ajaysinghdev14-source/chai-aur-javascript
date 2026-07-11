// pending, done(fullfill or resolve), nope(not, reject)
//

/*
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("chai-code");
    reject(new Error("chaicode error"));
  }, 2000);
});
console.log(promise);

// setTimeout(() => {
//   console.log(promise);
// }, 3000);

promise
  .then((data) => {
    newData = data.toUpperCase();
    return newData;
  })
  .then((data) => {
    return data + ".com";
  })
  .then(console.log)
  .catch((error) => {
    console.log(error);
    return "chai";
  })
  .then(console.log);
*/

// write a article on promise and real world analogy like anything - marvel, dc, series, real world analogy.

const turant = Promise.resolve("Turant");
console.log(turant);

const allPromise = Promise.allSettled([
  Promise.resolve("chai"),
  Promise.resolve("code"),
  Promise.reject("Error"),
]);

// allPromise.then(console.log);

const hPromise = new Promise((res, rej) => {
  setTimeout(() => {
    // res("MasterJi");
    rej(new Error("masterji rejected"));
  }, 3000);
});

async function nice() {
  try {
    const result = await hPromise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

nice();

// const newResult = await hPromise;
// console.log(newResult);
