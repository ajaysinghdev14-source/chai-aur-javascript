function createOptimizeVersion(fn) {
  const cache = {}; // tiffin

  return function (...args) {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    }

    const result = fn(...args);
    cache[key] = result;
    return result;
  };
}

function add(a, b) {
  const result = a + b; // 0.25cpu
  return result;
}

function square(n) {
  return n * n;
}

console.time("startCode");
square(5000);
console.timeEnd("codeEnd");
