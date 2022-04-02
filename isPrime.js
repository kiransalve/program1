let num = 10;

const isPrime = (num) => {
  let i; // divider
  let x = 2; //the number we will check
  let arr = [];

  let isPrimeNum = num;

  while (isPrimeNum > 0) {
    for (i = 2; i <= x / 2; i++) {
      if (x % i == 0) {
        break; // full dividation happen
      }
    }
    if (i > x / 2) {
      arr.push(x);
      isPrimeNum--;
    }
    x++;
  }
  return arr;
};

console.log(isPrime(num));
