let num = 10;

const isPrime = (num) => {
  let isPrimeNum;

  for (let i = 2; i <= num; i++) {
    isPrimeNum = 1;
    for (let j = 2; j <= i / 2; j++) {
      if (i % j == 0) {
        isPrimeNum = 0;
        break;
      }
    }
    if (isPrimeNum == 1) {
      console.log(i);
    }
  }
};

isPrime(num);
