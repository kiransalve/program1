// Brain Kernighan's Algorithm

let n = 15;
const countSetBit = (n) => {
  let count = 0;

  while (n) {
    n = n & (n - 1);
    count++;
  }

  return count;
};

console.log(countSetBit(n));
