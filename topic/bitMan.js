// count no. of set bits
// let count = 0;
// let n = -1;
// while (n) {
//   n = n & (n - 1); // it flips all set bits 0 and we count iterations
//   count++;
// } // Brain Kerninghan's alogorithm
// console.log(count);

// altering bits
// let n = 10
// let xor = n ^ (n >> 1);
// if (((xor + 1) & xor) == 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// // number to hexadecimal
// let map = {
//   0: "0",
//   1: "1",
//   3: "3",
//   4: "4",
//   5: "5",
//   6: "6",
//   7: "7",
//   8: "8",
//   9: "9",
//   10: "a",
//   11: "b",
//   12: "c",
//   13: "d",
//   14: "e",
//   15: "f",
// };
// let result = "";
// function binToHex(num) {
//   if (num == 0) return 0;
//   if (num < 0) {
//     num = 2 * 32 - num * -1;
//   }
//   while (num > 0) {
//     result = map[`${num % 16}`] + result;
//     num = parseInt(num / 16);
//   }
//   return result;
// }

// let num = 28;
// console.log(binToHex(num));

// sort integer by set bits

// devide two integer

// bitwise and of number

// maximum no. of words found in sentence

// misc
// let n = 10;

// for (let i = 0; i <= n; i++) {
//   let xor;
//   xor = xor ^ i;
//   if (i % 4 == 0) console.log(n);
//   if (i % 4 == 1) console.log(1);
//   if (i % 4 == 2) console.log(n - 1);
//   if (i % 4 == 3) console.log(0);
// }

// let n = 15
// let count = 0;
// while (n) {
//   n = n & (n - 1);
//   count++;
// }
// console.log(count);


// find 2 unique
let a = [4, 6, 4, 6, 5, 7];
let xor = 0;
// traverse array
for (let i = 0; i < a.length; i++) {
  xor = xor ^ a[i] // 4^6^4^6^5^7 gives 5^7 = 2 => 0 1 0
}

// find rightmost setbit
count = 0;
while (xor) {
  if (xor & 1) {
    break;
  }
  count++;
  xor = xor >> 1;
}

let xor1 = 0;
let xor2 = 0;
for (let i = 0; i < a.length; i++) {
  if (a[i] & (1 << count)) {
    xor1 = xor1 ^ a[i];
  } else {
    xor2 = xor2 ^ a[i];
  }
}

console.log(xor1, xor2);



