const hasAlternatingBit = (n) => {
  let xor = n ^ (n >> 1);

  if (((xor + 1) & xor) == 0) {
    return true;
  } else {
    return false;
  }
};
let n = 11;

console.log(hasAlternatingBit(n));
