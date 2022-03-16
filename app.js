function multiplier (a) {
  return function (b) {
    return a * b;
  }
}

let doubler = multiplier(4);

console.log(doubler(3));

